// Six-Component Model of an Information System
// CANVAS_HEIGHT: 600
// Educational vis-network visualization: K6 graph of the six IS components.
// Click a node to see its role in the currently selected scenario; toggle the
// scenario dropdown to see the same six components played by different actors.

const components = [
    {
        id: 'hardware',
        label: 'Hardware',
        x: 0,    y: -200,
        color: { background: '#708090', border: '#3f4a55', highlight: { background: '#94a3b1', border: '#3f4a55' } },
        fontColor: '#ffffff'
    },
    {
        id: 'software',
        label: 'Software',
        x: 175,  y: -98,
        color: { background: '#9ACD32', border: '#5e7d1c', highlight: { background: '#bbe168', border: '#5e7d1c' } },
        fontColor: '#1d2b00'
    },
    {
        id: 'network',
        label: 'Network',
        x: 175,  y: 102,
        color: { background: '#4682B4', border: '#2a4f7c', highlight: { background: '#74a8d4', border: '#2a4f7c' } },
        fontColor: '#ffffff'
    },
    {
        id: 'data',
        label: 'Data',
        x: 0,    y: 200,
        color: { background: '#FFD700', border: '#b8860b', highlight: { background: '#ffe357', border: '#b8860b' } },
        fontColor: '#3a2a00'
    },
    {
        id: 'user',
        label: 'User',
        x: -175, y: 98,
        color: { background: '#FF7F50', border: '#b8472a', highlight: { background: '#ffa583', border: '#b8472a' } },
        fontColor: '#ffffff'
    },
    {
        id: 'process',
        label: 'Business Process',
        x: -175, y: -102,
        color: { background: '#B19CD9', border: '#6e58a3', highlight: { background: '#cdbde6', border: '#6e58a3' } },
        fontColor: '#1d1335'
    }
];

// Definitions are scenario-independent (the textbook glossary).
const definitions = {
    hardware: 'The physical equipment — servers, storage, end-user devices, sensors — that runs everything else.',
    software: 'Programs and applications that turn raw computing power into useful behavior.',
    network:  'The channels that carry data between devices, from a building LAN to the global internet.',
    data:     'The raw facts the system captures, stores, and serves — the reason the whole system exists.',
    user:     'The people whose work the system exists to support.',
    process:  'The structured sequence of activities the organization performs to produce a result.'
};

const scenarios = {
    hospital: {
        name: 'Hospital Admission',
        roles: {
            hardware: {
                example: 'The triage workstation, bedside tablets, lab analyzers, and imaging machines.',
                breaks:  'No screen, no scanner, no IV pump — care simply stops moving.'
            },
            software: {
                example: 'The EHR (electronic health record), the bed-management module, and the lab-results viewer.',
                breaks:  'Nurses are back to paper charts and the pharmacy cannot see new orders.'
            },
            network: {
                example: 'The hospital LAN, wifi at every nurse station, and secure links to outside labs.',
                breaks:  'The lab gets the sample, but the result never makes it back to the floor.'
            },
            data: {
                example: "Patient name, MRN, allergies, vitals, prior visits, and active medication list.",
                breaks:  'Allergies are unknown, so the next dose could be the wrong one.'
            },
            user: {
                example: 'The admitting nurse, the on-call doctor, and the registration clerk at the front desk.',
                breaks:  'If the nurse cannot or will not chart accurately, the data layer becomes unreliable and every dashboard above it lies.'
            },
            process: {
                example: 'The admission workflow: triage → register → assign bed → place orders → notify floor.',
                breaks:  'Each admission becomes freeform improvisation, and consistency disappears.'
            }
        }
    },
    loan: {
        name: 'Loan Approval',
        roles: {
            hardware: {
                example: "The loan officer's laptop, the document scanner, and the underwriting bank's mainframe.",
                breaks:  'No way to scan a pay stub or run a credit pull — every application stalls.'
            },
            software: {
                example: 'The loan-origination system, the credit-bureau integration, and the e-signature platform.',
                breaks:  'Underwriters reach for spreadsheets, and decisions become wildly inconsistent.'
            },
            network: {
                example: 'The branch VPN, the credit-bureau API, and the secure channel to the funding bank.',
                breaks:  'The credit bureau call times out and applications pile up in "pending" forever.'
            },
            data: {
                example: 'Applicant income, FICO score, employment history, debt-to-income ratio, and collateral.',
                breaks:  'Without verified income or credit history, every approval is a coin flip.'
            },
            user: {
                example: 'The loan officer, the underwriter, and the applicant filling out the form online.',
                breaks:  'If the loan officer skips required disclosures, regulators take notice and fines follow.'
            },
            process: {
                example: 'The approval workflow: application → credit pull → underwriting → decision → funding.',
                breaks:  'Two officers approve the same applicant differently and the bank cannot defend either decision.'
            }
        }
    },
    university: {
        name: 'Course Registration',
        roles: {
            hardware: {
                example: "The student's laptop, the registrar's servers, and the kiosk in the advising office.",
                breaks:  'Students hit refresh on a frozen laptop and the registration window closes around them.'
            },
            software: {
                example: 'The student information system (SIS), the prerequisite-checker, and the course catalog.',
                breaks:  'Hand-filled add/drop forms reappear, and the registrar drowns in paper.'
            },
            network: {
                example: 'Campus wifi, the cloud SIS link, and the integration with financial aid.',
                breaks:  'Half the students see a course as "open" and the other half see it as "full" — chaos ensues.'
            },
            data: {
                example: 'Student transcript, declared major, prerequisites met, account holds, and class capacity.',
                breaks:  "A student gets enrolled in a course they haven't earned the prerequisite for, and finds out at the final."
            },
            user: {
                example: 'The student picking courses, the academic advisor, and the registrar approving exceptions.',
                breaks:  "If advisors don't review the plan, students graduate one credit short and lose a semester."
            },
            process: {
                example: 'The registration workflow: pick courses → check prereqs → check holds → enroll → confirm.',
                breaks:  'Without a defined sequence, prerequisites get missed and degree audits become a nightmare.'
            }
        }
    }
};

// Build edges: complete graph K6 (15 undirected edges).
function buildEdges() {
    const ids = components.map(c => c.id);
    const edges = [];
    for (let i = 0; i < ids.length; i++) {
        for (let j = i + 1; j < ids.length; j++) {
            edges.push({
                from: ids[i],
                to: ids[j],
                color: { color: '#b0bec5', highlight: '#546e7a' },
                width: 1
            });
        }
    }
    return edges;
}

function isInIframe() {
    try { return window.self !== window.top; } catch (e) { return true; }
}

let network = null;
let nodes = null;
let edges = null;
let currentScenario = 'hospital';
let selectedComponentId = null;

function initializeNetwork() {
    const enableMouseInteraction = !isInIframe();

    const visNodes = components.map(c => ({
        id: c.id,
        label: c.label,
        x: c.x,
        y: c.y,
        fixed: { x: true, y: true },
        color: c.color,
        font: { color: c.fontColor, size: 16, face: 'Arial', bold: { color: c.fontColor, size: 16, face: 'Arial' } }
    }));

    nodes = new vis.DataSet(visNodes);
    edges = new vis.DataSet(buildEdges());

    const options = {
        layout: { improvedLayout: false },
        physics: { enabled: false },
        interaction: {
            selectConnectedEdges: false,
            zoomView: enableMouseInteraction,
            dragView: enableMouseInteraction,
            dragNodes: false,
            navigationButtons: true,
            keyboard: { enabled: false }
        },
        nodes: {
            shape: 'box',
            margin: 14,
            borderWidth: 3,
            shadow: { enabled: true, color: 'rgba(0,0,0,0.18)', size: 5, x: 2, y: 2 },
            chosen: { node: function(values) { values.borderWidth = 5; } }
        },
        edges: {
            arrows: { to: { enabled: false } },
            smooth: false,
            selectionWidth: 0
        }
    };

    const container = document.getElementById('network');
    network = new vis.Network(container, { nodes, edges }, options);

    network.on('click', function(params) {
        if (params.nodes && params.nodes.length > 0) {
            showComponent(params.nodes[0]);
        } else {
            clearSelection();
        }
    });

    network.once('afterDrawing', function() {
        const pos = network.getViewPosition();
        network.moveTo({
            position: { x: pos.x + 90, y: pos.y },
            animation: false
        });
    });
}

function showComponent(componentId) {
    const component = components.find(c => c.id === componentId);
    if (!component) return;

    selectedComponentId = componentId;

    const role = scenarios[currentScenario].roles[componentId];
    const swatch = document.getElementById('info-swatch');
    const title  = document.getElementById('info-title');
    const body   = document.getElementById('info-body');

    swatch.style.backgroundColor = component.color.background;
    swatch.style.borderColor     = component.color.border;
    title.textContent            = component.label;

    body.innerHTML =
        '<p><span class="info-label">Definition</span>' + escapeHtml(definitions[componentId]) + '</p>' +
        '<p><span class="info-label">In ' + escapeHtml(scenarios[currentScenario].name) + '</span>' + escapeHtml(role.example) + '</p>' +
        '<p class="what-breaks"><span class="info-label">What breaks if missing?</span>' + escapeHtml(role.breaks) + '</p>';
}

function clearSelection() {
    selectedComponentId = null;
    document.getElementById('info-swatch').style.backgroundColor = '#ced4da';
    document.getElementById('info-swatch').style.borderColor     = '#495057';
    document.getElementById('info-title').textContent            = 'Click a component';
    document.getElementById('info-body').innerHTML =
        '<p class="info-hint">Click any of the six nodes to see how that component plays its role in the selected scenario.</p>';
}

function escapeHtml(s) {
    return String(s)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

function onScenarioChange() {
    const sel = document.getElementById('scenario-select');
    currentScenario = sel.value;
    if (selectedComponentId) {
        showComponent(selectedComponentId);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    initializeNetwork();
    document.getElementById('scenario-select').addEventListener('change', onScenarioChange);
});
