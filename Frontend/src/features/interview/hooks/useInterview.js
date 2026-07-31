import { useState } from 'react';

export const useInterview = () => {
  const [loading, setLoading] = useState(false);
  const [reports, setReports] = useState([]);
  const [report, setReport] = useState(null);

  const generateReport = async ({ jobDescription, selfDescription, resumeFile }) => {
    setLoading(true);

    try {
      const newReport = {
        _id: `${Date.now()}`,
        title: jobDescription?.trim()
          ? jobDescription.trim().slice(0, 40)
          : 'Untitled Position',
        createdAt: new Date().toISOString(),
        matchScore: 86,
        jobDescription,
        selfDescription,
        resumeFile,
        technicalQuestions: [
          {
            question: 'How would you structure a React component for maintainability?',
            intention: 'Assess component design and clarity.',
            answer: 'Break the UI into small, focused components and keep state local where possible.',
          },
        ],
        behavioralQuestions: [
          {
            question: 'Tell me about a time you solved a difficult problem.',
            intention: 'Measure ownership and collaboration.',
            answer: 'Describe the situation, your actions, and the outcome clearly.',
          },
        ],
        preparationPlan: [
          { day: 1, focus: 'Review core concepts', tasks: ['React basics', 'State management'] },
          { day: 2, focus: 'Practice communication', tasks: ['Mock interview', 'Explain tradeoffs'] },
        ],
        skillGaps: [
          { skill: 'System Design', severity: 'medium' },
          { skill: 'TypeScript', severity: 'high' },
        ],
      };

      setReports((prev) => [newReport, ...prev]);
      setReport(newReport);
      return newReport;
    } finally {
      setLoading(false);
    }
  };

  const getReportById = async (id) => {
    setLoading(true);

    try {
      const found = reports.find((item) => item._id === id);
      if (found) {
        setReport(found);
        return found;
      }

      const fallback = {
        _id: id,
        title: 'Generated Interview Plan',
        createdAt: new Date().toISOString(),
        matchScore: 86,
        technicalQuestions: [
          {
            question: 'How would you improve this app?',
            intention: 'Assess product thinking.',
            answer: 'Focus on user experience, maintainability, and clear feedback loops.',
          },
        ],
        behavioralQuestions: [
          {
            question: 'Describe a challenge you overcame.',
            intention: 'Understand resilience.',
            answer: 'Share a concise story with clear results.',
          },
        ],
        preparationPlan: [
          { day: 1, focus: 'Review core concepts', tasks: ['Practice coding', 'Revisit fundamentals'] },
        ],
        skillGaps: [{ skill: 'Communication', severity: 'medium' }],
      };

      setReport(fallback);
      return fallback;
    } finally {
      setLoading(false);
    }
  };

  const getResumePdf = async () => {
    return null;
  };

  return { loading, generateReport, reports, report, getReportById, getResumePdf };
};
