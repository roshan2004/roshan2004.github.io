import React from 'react';

// Styles use `.dark` ancestor selector so the diagram follows the site's
// dark-mode toggle (DarkModeContext adds `dark` to <html>) rather than
// `prefers-color-scheme`.
const diagramCss = `
.cdb-diagram text { font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,sans-serif; }
.cdb-diagram .th { font-size:14px; font-weight:500; }
.cdb-diagram .ts { font-size:12px; font-weight:400; }
.cdb-diagram .arr { stroke:#5F5E5A; stroke-width:1.5; }
.cdb-diagram .dash { stroke:#5F5E5A; stroke-width:1; stroke-dasharray:4 3; }
.cdb-diagram .group-border { stroke:rgba(0,0,0,0.15); }
.cdb-diagram .hint { fill:#888780; }

.cdb-diagram .c-gray rect { fill:#F1EFE8; stroke:#5F5E5A; }
.cdb-diagram .c-gray .th { fill:#2C2C2A; } .cdb-diagram .c-gray .ts { fill:#5F5E5A; }
.cdb-diagram .c-purple rect { fill:#EEEDFE; stroke:#534AB7; }
.cdb-diagram .c-purple .th { fill:#3C3489; } .cdb-diagram .c-purple .ts { fill:#534AB7; }
.cdb-diagram .c-teal rect { fill:#E1F5EE; stroke:#0F6E56; }
.cdb-diagram .c-teal .th { fill:#085041; } .cdb-diagram .c-teal .ts { fill:#0F6E56; }
.cdb-diagram .c-blue rect { fill:#E6F1FB; stroke:#185FA5; }
.cdb-diagram .c-blue .th { fill:#0C447C; } .cdb-diagram .c-blue .ts { fill:#185FA5; }
.cdb-diagram .c-green rect { fill:#EAF3DE; stroke:#3B6D11; }
.cdb-diagram .c-green .th { fill:#27500A; } .cdb-diagram .c-green .ts { fill:#3B6D11; }
.cdb-diagram .c-coral rect { fill:#FAECE7; stroke:#993C1D; }
.cdb-diagram .c-coral .th { fill:#712B13; } .cdb-diagram .c-coral .ts { fill:#993C1D; }
.cdb-diagram .c-amber rect { fill:#FAEEDA; stroke:#854F0B; }
.cdb-diagram .c-amber .th { fill:#633806; } .cdb-diagram .c-amber .ts { fill:#854F0B; }

.dark .cdb-diagram .arr { stroke:#B4B2A9; }
.dark .cdb-diagram .dash { stroke:#B4B2A9; }
.dark .cdb-diagram .group-border { stroke:rgba(255,255,255,0.15); }
.dark .cdb-diagram .c-gray rect { fill:#444441; stroke:#B4B2A9; }
.dark .cdb-diagram .c-gray .th { fill:#D3D1C7; } .dark .cdb-diagram .c-gray .ts { fill:#B4B2A9; }
.dark .cdb-diagram .c-purple rect { fill:#3C3489; stroke:#AFA9EC; }
.dark .cdb-diagram .c-purple .th { fill:#CECBF6; } .dark .cdb-diagram .c-purple .ts { fill:#AFA9EC; }
.dark .cdb-diagram .c-teal rect { fill:#085041; stroke:#5DCAA5; }
.dark .cdb-diagram .c-teal .th { fill:#9FE1CB; } .dark .cdb-diagram .c-teal .ts { fill:#5DCAA5; }
.dark .cdb-diagram .c-blue rect { fill:#0C447C; stroke:#85B7EB; }
.dark .cdb-diagram .c-blue .th { fill:#B5D4F4; } .dark .cdb-diagram .c-blue .ts { fill:#85B7EB; }
.dark .cdb-diagram .c-green rect { fill:#27500A; stroke:#97C459; }
.dark .cdb-diagram .c-green .th { fill:#C0DD97; } .dark .cdb-diagram .c-green .ts { fill:#97C459; }
.dark .cdb-diagram .c-coral rect { fill:#712B13; stroke:#F0997B; }
.dark .cdb-diagram .c-coral .th { fill:#F5C4B3; } .dark .cdb-diagram .c-coral .ts { fill:#F0997B; }
.dark .cdb-diagram .c-amber rect { fill:#633806; stroke:#FAC775; }
.dark .cdb-diagram .c-amber .th { fill:#FAEEDA; } .dark .cdb-diagram .c-amber .ts { fill:#FAC775; }
`;

const ContractsDBDiagram = () => (
  <svg
    className='cdb-diagram w-full h-auto'
    viewBox='0 0 680 520'
    xmlns='http://www.w3.org/2000/svg'
    role='img'
    aria-labelledby='cdb-diagram-title cdb-diagram-desc'
  >
    <title id='cdb-diagram-title'>
      ContractsDB Agent architecture — Teams-first
    </title>
    <desc id='cdb-diagram-desc'>
      Contract management system where users interact with a Copilot Studio
      agent in Teams, upload contracts in-chat, which triggers OCR,
      classification, and LLM extraction via Power Automate, with adaptive
      card review and SharePoint deposit.
    </desc>
    <style>{diagramCss}</style>
    <defs>
      <marker
        id='cdb-arrow'
        viewBox='0 0 10 10'
        refX='8'
        refY='5'
        markerWidth='6'
        markerHeight='6'
        orient='auto-start-reverse'
      >
        <path
          d='M2 1L8 5L2 9'
          fill='none'
          stroke='context-stroke'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </marker>
    </defs>

    {/* Teams container */}
    <rect
      x='30'
      y='20'
      width='300'
      height='310'
      rx='16'
      fill='none'
      className='group-border'
      strokeWidth='0.5'
      strokeDasharray='6 4'
    />
    <text className='ts hint' x='46' y='42'>
      Microsoft Teams
    </text>

    {/* Box 1: User */}
    <g className='c-gray'>
      <rect x='60' y='58' width='240' height='44' rx='8' strokeWidth='0.5' />
      <text className='th' x='180' y='80' textAnchor='middle' dominantBaseline='central'>
        User opens agent in Teams
      </text>
    </g>

    <line x1='180' y1='102' x2='180' y2='132' className='arr' markerEnd='url(#cdb-arrow)' />

    {/* Box 2: Copilot Studio */}
    <g className='c-purple'>
      <rect x='60' y='132' width='240' height='56' rx='8' strokeWidth='0.5' />
      <text className='th' x='180' y='152' textAnchor='middle' dominantBaseline='central'>
        Copilot Studio agent
      </text>
      <text className='ts' x='180' y='172' textAnchor='middle' dominantBaseline='central'>
        Guided conversation + upload
      </text>
    </g>

    <line x1='180' y1='188' x2='180' y2='218' className='arr' markerEnd='url(#cdb-arrow)' />

    {/* Box 3: Adaptive card review */}
    <g className='c-teal'>
      <rect x='60' y='218' width='240' height='56' rx='8' strokeWidth='0.5' />
      <text className='th' x='180' y='238' textAnchor='middle' dominantBaseline='central'>
        Adaptive card review
      </text>
      <text className='ts' x='180' y='258' textAnchor='middle' dominantBaseline='central'>
        Edit, verify, confirm deposit
      </text>
    </g>

    {/* Edit loop */}
    <path
      d='M60 248 L40 248 L40 162 L60 162'
      fill='none'
      className='dash'
      markerEnd='url(#cdb-arrow)'
    />
    <text className='ts hint' x='26' y='210' transform='rotate(-90 26 210)'>
      Edit loop
    </text>

    {/* Arrow to pipeline */}
    <line x1='300' y1='160' x2='390' y2='160' className='arr' markerEnd='url(#cdb-arrow)' />
    <text className='ts hint' x='345' y='152' textAnchor='middle'>
      PDF
    </text>

    {/* Pipeline container */}
    <rect
      x='380'
      y='48'
      width='270'
      height='150'
      rx='12'
      fill='none'
      className='group-border'
      strokeWidth='0.5'
      strokeDasharray='6 4'
    />
    <text className='ts hint' x='405' y='42'>
      Power Automate agent flows
    </text>

    {/* Box 4: Azure Doc Intelligence */}
    <g className='c-blue'>
      <rect x='390' y='58' width='250' height='56' rx='8' strokeWidth='0.5' />
      <text className='th' x='515' y='78' textAnchor='middle' dominantBaseline='central'>
        Azure Doc Intelligence
      </text>
      <text className='ts' x='515' y='98' textAnchor='middle' dominantBaseline='central'>
        OCR + layout analysis
      </text>
    </g>

    <line x1='515' y1='114' x2='515' y2='132' className='arr' markerEnd='url(#cdb-arrow)' />

    {/* Box 5: GPT-4o */}
    <g className='c-purple'>
      <rect x='390' y='132' width='250' height='56' rx='8' strokeWidth='0.5' />
      <text className='th' x='515' y='152' textAnchor='middle' dominantBaseline='central'>
        GPT-4o extraction
      </text>
      <text className='ts' x='515' y='172' textAnchor='middle' dominantBaseline='central'>
        Classify + extract (4 languages)
      </text>
    </g>

    {/* Arrow back to review */}
    <path
      d='M515 188 L515 248 L300 248'
      fill='none'
      className='arr'
      markerEnd='url(#cdb-arrow)'
    />
    <text className='ts hint' x='420' y='224'>
      Structured JSON
    </text>

    {/* Confirmed arrow down */}
    <line x1='180' y1='274' x2='180' y2='350' className='arr' markerEnd='url(#cdb-arrow)' />
    <text className='ts hint' x='188' y='316'>
      Confirmed
    </text>

    {/* Box 6: SharePoint */}
    <g className='c-green'>
      <rect x='50' y='350' width='200' height='56' rx='8' strokeWidth='0.5' />
      <text className='th' x='150' y='370' textAnchor='middle' dominantBaseline='central'>
        SharePoint ContractsDB
      </text>
      <text className='ts' x='150' y='390' textAnchor='middle' dominantBaseline='central'>
        Document Sets + metadata
      </text>
    </g>

    <line x1='250' y1='378' x2='280' y2='378' className='arr' markerEnd='url(#cdb-arrow)' />

    {/* Box 7: Dataverse */}
    <g className='c-green'>
      <rect x='280' y='350' width='200' height='56' rx='8' strokeWidth='0.5' />
      <text className='th' x='380' y='370' textAnchor='middle' dominantBaseline='central'>
        Dataverse
      </text>
      <text className='ts' x='380' y='390' textAnchor='middle' dominantBaseline='central'>
        Pipeline log + accuracy
      </text>
    </g>

    {/* Box 8: Eval pipeline */}
    <g className='c-coral'>
      <rect x='510' y='350' width='150' height='56' rx='8' strokeWidth='0.5' />
      <text className='th' x='585' y='370' textAnchor='middle' dominantBaseline='central'>
        Eval pipeline
      </text>
      <text className='ts' x='585' y='390' textAnchor='middle' dominantBaseline='central'>
        50 contracts
      </text>
    </g>

    <path
      d='M585 350 L585 310 L570 310 L570 188'
      fill='none'
      className='dash'
      markerEnd='url(#cdb-arrow)'
    />
    <text className='ts hint' x='578' y='290'>
      Feedback
    </text>

    {/* 12 topics bar */}
    <g className='c-amber'>
      <rect x='50' y='440' width='430' height='44' rx='8' strokeWidth='0.5' />
      <text className='th' x='265' y='462' textAnchor='middle' dominantBaseline='central'>
        12 chatbot topics: search, alerts, Q&amp;A, duplicates, status, and more
      </text>
    </g>

    <path
      d='M150 440 L150 406'
      fill='none'
      className='dash'
      markerEnd='url(#cdb-arrow)'
    />
    <path
      d='M380 440 L380 406'
      fill='none'
      className='dash'
      markerEnd='url(#cdb-arrow)'
    />
  </svg>
);

export default ContractsDBDiagram;
