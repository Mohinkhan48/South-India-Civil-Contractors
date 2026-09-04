import { ProcessStep } from '../types';

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Consultation & Site Feasibility',
    timeline: 'Day 1 - 5',
    description: 'We meet to understand your vision, lifestyle needs, architectural ambitions, and timeline. Our team conducts preliminary soil analysis, site topography survey, and local municipal zoning checks.',
    deliverables: [
      'Comprehensive Site Survey & Contour Mapping',
      'Preliminary Geotechnical Assessment',
      'Client Requirement Blueprint & Architectural Brief'
    ]
  },
  {
    number: '02',
    title: 'Planning & Design Coordination',
    timeline: 'Week 2 - 4',
    description: 'Architects and structural engineers create 3D building models, structural load simulations, Vastu alignments, MEP schematics, and municipal sanction drawings for statutory approval.',
    deliverables: [
      '3D Architectural Visualizations & Walkthroughs',
      'Certified Structural Load & Foundation Drawings',
      'Sanction Approval Set & Utility Coordination Maps'
    ]
  },
  {
    number: '03',
    title: 'Cost Estimation & Itemized BOQ',
    timeline: 'Week 4 - 5',
    description: 'We deliver an exhaustive, crystal-clear Bill of Quantities (BOQ) detailing material grades, brand specifications, milestone timelines, and fixed pricing with zero hidden variations.',
    deliverables: [
      'Itemized Bill of Quantities (BOQ)',
      'Material Specification Schedule (Brands & Grades)',
      'Milestone-linked Payment & Handover Schedule'
    ]
  },
  {
    number: '04',
    title: 'Precision Construction & Execution',
    timeline: 'Months 2 - 14',
    description: 'Our certified civil crews, master masons, and on-site project engineers commence structural casting, brickwork, waterproofing, MEP rough-ins, and high-end exterior finishes under strict safety protocols.',
    deliverables: [
      'Deep Foundation & RCC Framed Superstructure',
      'Concealed Electrical, Plumbing & HVAC Integration',
      'Weekly 4K Drone Logs & Live Client Dashboard Updates'
    ]
  },
  {
    number: '05',
    title: 'Quality Inspection & Lab Testing',
    timeline: 'Continuous & Stage-wise',
    description: 'Every phase undergoes stringent QA/QC audits: concrete cube compressive strength tests, ultrasonic non-destructive testing, flood testing for wet areas, and laser-guided plumb checks.',
    deliverables: [
      'Certified Material Test Lab Reports',
      'Multi-point Waterproofing & Acoustic Test Certificates',
      'Zero-defect Pre-handover Snagging Audit'
    ]
  },
  {
    number: '06',
    title: 'Final Handover & Warranty',
    timeline: 'Final Milestone',
    description: 'We perform a deep site cleaning, commissioning of all electrical and mechanical systems, and hand over the keys along with as-built drawings, warranties, and our 10-year structural guarantee.',
    deliverables: [
      'Official Handover of Keys & As-built Drawings',
      '10-Year Structural Guarantee Document',
      'Municipal Occupancy & Completion Clearance'
    ]
  }
];
