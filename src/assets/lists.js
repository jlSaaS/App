export default {
  exams: [
    {
      id: '',
      client: '',
      createdBy: '',
      createdDate: '',
      state: '',
      documents: [],
      noticeDate: '',
      examStartDate: '',
      periodStartDate: '',
      periodEndDate: '',
      assignedTo: {},
      examiners: [],
      examParts: [
        {
          id: '',
          title: '',
          sequence: 1,
          dueDate: '',
          questions: [
            {
              id: '',
              sequence: 1,
              level: 1,
              label: '',
              question: '',
              response: [
                {
                  id: '',
                  responseText: '',
                  responseTF: null,
                  responseMultiple: [],
                  responseAttachments: [],
                  modifiedDate: '',
                  modifiedBy: {}
                }
              ]
            }
          ]
        }
      ],
      status: '',
      statusDate: ''
    }
  ],
  states: [
    { abbr: 'AL', name: 'Alabama' },
    { abbr: 'AK', name: 'Alaska' },
    { abbr: 'AZ', name: 'Arizona' },
    { abbr: 'AR', name: 'Arkansas' },
    { abbr: 'CA', name: 'California' },
    { abbr: 'CO', name: 'Colorado' },
    { abbr: 'CT', name: 'Connecticut' },
    { abbr: 'DE', name: 'Delaware' },
    { abbr: 'DC', name: 'District of Columbia' },
    { abbr: 'FL', name: 'Florida' },
    { abbr: 'GA', name: 'Georgia' },
    { abbr: 'HI', name: 'Hawaii' },
    { abbr: 'ID', name: 'Idaho' },
    { abbr: 'IL', name: 'Illinois' },
    { abbr: 'IN', name: 'Indiana' },
    { abbr: 'IA', name: 'Iowa' },
    { abbr: 'KS', name: 'Kansas' },
    { abbr: 'KY', name: 'Kentucky' },
    { abbr: 'LA', name: 'Louisiana' },
    { abbr: 'ME', name: 'Maine' },
    { abbr: 'MD', name: 'Maryland' },
    { abbr: 'MA', name: 'Massachusetts' },
    { abbr: 'MI', name: 'Michigan' },
    { abbr: 'MN', name: 'Minnesota' },
    { abbr: 'MS', name: 'Mississippi' },
    { abbr: 'MO', name: 'Missouri' },
    { abbr: 'MT', name: 'Montana' },
    { abbr: 'NE', name: 'Nebraska' },
    { abbr: 'NV', name: 'Nevada' },
    { abbr: 'NH', name: 'New Hampshire' },
    { abbr: 'NJ', name: 'New Jersey' },
    { abbr: 'NM', name: 'New Mexico' },
    { abbr: 'NY', name: 'New York' },
    { abbr: 'NC', name: 'North Carolina' },
    { abbr: 'ND', name: 'North Dakota' },
    { abbr: 'OH', name: 'Ohio' },
    { abbr: 'OK', name: 'Oklahoma' },
    { abbr: 'OR', name: 'Oregon' },
    { abbr: 'PA', name: 'Pennsylvania' },
    { abbr: 'RI', name: 'Rhode Island' },
    { abbr: 'SC', name: 'South Carolina' },
    { abbr: 'SD', name: 'South Dakota' },
    { abbr: 'TN', name: 'Tennessee' },
    { abbr: 'TX', name: 'Texas' },
    { abbr: 'UT', name: 'Utah' },
    { abbr: 'VT', name: 'Vermont' },
    { abbr: 'VA', name: 'Virginia' },
    { abbr: 'WA', name: 'Washington' },
    { abbr: 'WV', name: 'West Virginia' },
    { abbr: 'WI', name: 'Wisconsin' },
    { abbr: 'WY', name: 'Wyoming' }
  ],
  examStatuses: [ /* eslint-disable */
    { label: 'In Creation', description: 'This means you requested a new exam be created by us (the provider).' },
    { label: 'Creation Review', description: 'This means we finished creating the exam and we are waiting for you to review and approve its format.' },
    { label: 'Modifying Creation', description: `This means you asked us to make some changes to the exam format. We're working on that.` },
    { label: 'Ready to Start', description: `This means you reviewed and approved the new exam format and it's ready for you to start working on it.` },
    { label: 'Working', description: `This means you're working on your exam.` },
    { label: 'Ready for Final Review', description: `This means all the pieces of the exam have been answered and it's waiting for your final review and approval.` },
    { label: 'Ready to Submit', description: `This means you reviewed and approved the exam questions and it's ready to send to the examiners.` },
    { label: 'Submitted', description: 'This means you send the exam to the examiners.' },
    { label: 'Report Received', description: `This means you received an examination report from the examiners. You'll need to prepare a response and send it to them.` },
    { label: 'Response Submitted', description: `This means you sent a response to the examination report. You may have items to fix.` },
    { label: 'In Remediation', description: `This means you're fixing some of the problems the examiner pointed out in the examination report.` },
    { label: 'Closed', description: `This means the exam is done and you've fixed all the problems pointed out in the examination report.` }
  ] /* eslint-enable */
}
