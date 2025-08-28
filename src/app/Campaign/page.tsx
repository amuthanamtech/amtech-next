
'use client'

import { useState, useRef, useEffect } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';

interface Campaign {
  fromEmail: string;
  password: string;
  subject: string;
  preview: string;
  toEmails: string[];
  ccEmails: string[];
  bodyText: string;
  bodyHtml: string;
  attachments: File[];
  schedule: string | null;
}

interface EnhancedEmailEditorProps {
  content: string;
  bodyText: string;
  onChange: (content: string) => void;
  onTextChange: (text: string) => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  setCurrentStep: (step: number) => void;
}

export default function CampaignEmailPage() {
  const [campaign, setCampaign] = useState<Campaign>({
    fromEmail: '',
    password: '',
    subject: '',
    preview: '',
    toEmails: [],
    ccEmails: [],
    bodyText: '',
    bodyHtml: '<p>Start composing your email campaign...</p>',
    attachments: [],
    schedule: null,
  });
  const [emailList, setEmailList] = useState('');
  const [ccEmailList, setCcEmailList] = useState('');
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [activeTab, setActiveTab] = useState('visual');
  const [showRecipientTips, setShowRecipientTips] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(1);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const steps = [
    { id: 1, title: 'Sender Details' },
    { id: 2, title: 'Content' },
    { id: 3, title: 'Recipients' },
    { id: 4, title: 'Attachments' },
    { id: 5, title: 'Review & Send' },
  ];

  // Check screen size on mount and resize
  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 1024);
      if (window.innerWidth >= 1024) {
        setSidebarOpen(true);
      }
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  useEffect(() => {
    // Simulate progress for demo purposes
    if (sending) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setSending(false);
            setSent(true);
            return 100;
          }
          return prev + 10;
        });
      }, 300);
      return () => clearInterval(interval);
    }
  }, [sending]);

  const handleContentChange = (content: string) => {
    setCampaign({ ...campaign, bodyHtml: content });
  };

  const handleBodyTextChange = (text: string) => {
    setCampaign({ ...campaign, bodyText: text });
  };

  const handleAddRecipients = (type: 'to' | 'cc') => {
    const emails = (type === 'to' ? emailList : ccEmailList)
      .split(/[\n,]+/)
      .map(email => email.trim())
      .filter(email => email);
    
    if (type === 'to') {
      setCampaign({
        ...campaign,
        toEmails: [...new Set([...campaign.toEmails, ...emails])]
      });
      setEmailList('');
    } else {
      setCampaign({
        ...campaign,
        ccEmails: [...new Set([...campaign.ccEmails, ...emails])]
      });
      setCcEmailList('');
    }
    setCurrentStep(3);
  };

  const handleRemoveRecipient = (emailToRemove: string, type: 'to' | 'cc') => {
    if (type === 'to') {
      setCampaign({
        ...campaign,
        toEmails: campaign.toEmails.filter(email => email !== emailToRemove)
      });
    } else {
      setCampaign({
        ...campaign,
        ccEmails: campaign.ccEmails.filter(email => email !== emailToRemove)
      });
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (files.length > 0) {
      setCampaign({
        ...campaign,
        attachments: [...campaign.attachments, ...files.slice(0, 2 - campaign.attachments.length)]
      });
      setCurrentStep(4);
    }
  };

  const handleRemoveAttachment = (index: number) => {
    setCampaign({
      ...campaign,
      attachments: campaign.attachments.filter((_, i) => i !== index)
    });
  };

  const handleSendTest = () => {
    const testButton = document.getElementById('test-button');
    if (testButton) {
      testButton.classList.add('animate-pulse');
      setTimeout(() => {
        testButton.classList.remove('animate-pulse');
        alert(`Test email would be sent with content: ${campaign.bodyHtml.substring(0, 100)}...`);
      }, 600);
    }
  };

  const handleSchedule = () => {
    const dateTime = prompt('Enter schedule date and time (YYYY-MM-DD HH:MM):');
    if (dateTime) {
      setCampaign({ ...campaign, schedule: dateTime });
      
      const toast = document.getElementById('schedule-toast');
      if (toast) {
        toast.classList.remove('hidden');
        setTimeout(() => {
          toast.classList.add('hidden');
        }, 3000);
      }
    }
  };

const handleSend = async () => {
  try {
    setSending(true);
    setCurrentStep(5);

    const res = await fetch("/api/sendemail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        from: "prakashvengad7575@gmail.com",
        subject: "Test",
        toEmails: "prakashai7639@gmail.com,prakashvengad@gmail.com",
        ccEmails: "",
        body: "<h1>Hello</h1><p>This is a test</p>",
      }),
    });

    if (res.ok) {
      alert("✅ Email sent successfully!");
    } else {
      const error = await res.json();
      alert("❌ Failed to send email: ");
    }
  } catch (err) {
    console.error("Error sending email:", err);
    alert("❌ An unexpected error occurred.");
  } finally {
    setSending(false);
  }
};


  if (sent) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center"
        >
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-emerald-100 mb-6">
            <svg className="h-10 w-10 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Campaign Sent Successfully!</h2>
          <p className="text-gray-600 mb-6">
            Your email campaign has been sent to {campaign.toEmails.length} recipients.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              setSent(false);
              setProgress(0);
              setCurrentStep(1);
            }}
            className="w-full px-4 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500 shadow-md"
          >
            Create New Campaign
          </motion.button>
        </motion.div>
    </div>
  );
}

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Head>
        <title>Create Email Campaign | NextJS</title>
        <meta name="description" content="Create and send email campaigns with NextJS" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </Head>

      {/* Schedule Toast Notification */}
      <div id="schedule-toast" className="hidden fixed top-4 right-4 z-50">
        <motion.div 
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-emerald-100 border-l-4 border-emerald-500 text-emerald-700 p-4 rounded-lg shadow-lg"
        >
          <div className="flex items-center">
            <i className="fas fa-calendar-check text-emerald-500 mr-2"></i>
            <p className="font-medium">Campaign scheduled successfully!</p>
          </div>
        </motion.div>
      </div>

      {/* Mobile sidebar toggle */}
      <div className="lg:hidden fixed top-4 left-4 z-40">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-3 rounded-md bg-white shadow-md text-violet-600"
        >
          <i className={`fas ${sidebarOpen ? 'fa-times' : 'fa-bars'} text-lg`}></i>
        </button>
      </div>

      <div className="flex max-w-7xl mx-auto">
        {/* Sidebar - Fixed for desktop, animated for mobile */}
        <motion.div 
          initial={false}
          animate={isDesktop ? { x: 0 } : (sidebarOpen ? { x: 0 } : { x: -300 })}
          className="fixed lg:static inset-y-0 left-0 z-30 w-72 bg-gradient-to-b from-violet-700 to-fuchsia-800 text-white shadow-xl lg:shadow-none lg:rounded-r-2xl overflow-y-auto"
        >
          <div className="p-6">
            <div className="flex items-center justify-between mb-10">
              <h1 className="text-2xl font-bold">Email Campaign</h1>
              <button 
                onClick={() => setSidebarOpen(false)}
                className="lg:hidden p-2 rounded-md hover:bg-violet-600"
              >
                <i className="fas fa-times"></i>
              </button>
            </div>

            <div className="mb-10">
              <h2 className="text-sm uppercase tracking-wider text-violet-300 mb-4">Campaign Progress</h2>
              <div className="space-y-6">
                {steps.map((step) => (
                  <div key={step.id} className="flex items-center">
                    <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${currentStep >= step.id ? 'bg-white text-violet-700' : 'bg-violet-600 text-white'} mr-3`}>
                      {step.id}
                    </div>
                    <span className={currentStep === step.id ? 'font-medium' : 'text-violet-200'}>{step.title}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-10">
              <h2 className="text-sm uppercase tracking-wider text-violet-300 mb-4">Quick Stats</h2>
              <div className="space-y-4">
                <div className="bg-violet-600 bg-opacity-50 rounded-lg p-4">
                  <div className="text-violet-200 text-sm">To Recipients</div>
                  <div className="text-xl font-bold">{campaign.toEmails.length}</div>
                </div>
                <div className="bg-violet-600 bg-opacity-50 rounded-lg p-4">
                  <div className="text-violet-200 text-sm">CC Recipients</div>
                  <div className="text-xl font-bold">{campaign.ccEmails.length}</div>
                </div>
                <div className="bg-violet-600 bg-opacity-50 rounded-lg p-4">
                  <div className="text-violet-200 text-sm">Attachments</div>
                  <div className="text-xl font-bold">{campaign.attachments.length}</div>
                </div>
              </div>
            </div>

            <div className="bg-white bg-opacity-10 rounded-lg p-4">
              <h3 className="font-medium mb-2">Need help?</h3>
              <p className="text-violet-200 text-sm mb-3">Check our documentation or contact support</p>
              <button className="text-sm bg-white text-violet-700 rounded-md px-3 py-2 w-full font-medium">
                Support Center
              </button>
            </div>
          </div>
        </motion.div>

        {/* Main content */}
        <div className="flex-1 lg:ml-6">
          <div className="p-4 lg:p-8">
            {/* Header */}
            <motion.header 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:flex md:items-center md:justify-between mb-6 lg:mb-8 py-4 lg:py-6 bg-white rounded-2xl shadow-md px-4 lg:px-6"
            >
              <div className="flex-1 min-w-0 mb-4 md:mb-0">
                <h1 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
                  Create Email Campaign
                </h1>
                <p className="mt-1 lg:mt-2 text-slate-500 text-sm lg:text-base">Design and send beautiful email campaigns to your audience</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  id="test-button"
                  onClick={handleSendTest}
                  className="inline-flex items-center justify-center px-3 py-2 lg:px-4 lg:py-2 border border-slate-300 rounded-full shadow-sm text-sm font-medium text-slate-700 bg-white hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500 transition-all duration-200"
                >
                  <i className="fas fa-paper-plane mr-2 text-violet-500"></i>
                  Send Test
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleSchedule}
                  className="inline-flex items-center justify-center px-3 py-2 lg:px-4 lg:py-2 border border-slate-300 rounded-full shadow-sm text-sm font-medium text-slate-700 bg-white hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500 transition-all duration-200"
                >
                  <i className="far fa-clock mr-2 text-fuchsia-500"></i>
                  Schedule
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleSend}
                  disabled={sending || campaign.toEmails.length === 0}
                  className="inline-flex items-center justify-center px-4 py-2 lg:px-6 lg:py-2 border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                >
                  {sending ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <i className="fas fa-paper-plane mr-2"></i>
                      Send Campaign
                    </>
                  )}
                </motion.button>
              </div>
            </motion.header>

            {/* Progress bar for sending state */}
            {sending && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 lg:mb-8 bg-white rounded-2xl shadow-md p-4 lg:p-6"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-medium text-slate-800">Sending Campaign</h3>
                  <span className="text-sm font-medium text-violet-600">{progress}%</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2.5">
                  <motion.div 
                    className="h-2.5 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.5 }}
                  ></motion.div>
                </div>
                <p className="text-sm text-slate-500 mt-3">
                  Sending to {campaign.toEmails.length} recipients...
                </p>
              </motion.div>
            )}

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white shadow-lg overflow-hidden rounded-xl lg:rounded-2xl mb-6 lg:mb-8"
            >
              <div className="px-4 lg:px-6 py-4 lg:py-5 bg-gradient-to-r from-violet-600 to-fuchsia-600">
                <h3 className="text-lg leading-6 font-medium text-white">Campaign Details</h3>
                <p className="mt-1 max-w-2xl text-sm text-violet-100">Fill in the details for your email campaign.</p>
              </div>
              
              <div className="px-4 lg:px-6 py-4 lg:py-6 space-y-6 lg:space-y-8">
                {/* Sender Details */}
                <div>
                  <h4 className="text-md font-medium text-slate-700 mb-4 flex items-center">
                    <i className="fas fa-user-circle mr-2 text-violet-500"></i>
                    Sender Details
                  </h4>
                  <div className="grid grid-cols-1 gap-4 lg:gap-6 md:grid-cols-2">
                    <div>
                      <label htmlFor="fromEmail" className="block text-sm font-medium text-slate-700 mb-2">
                        From Email
                      </label>
                      <input
                        id="fromEmail"
                        type="email"
                        className="mt-1 block w-full border border-slate-300 rounded-lg lg:rounded-xl shadow-sm py-2 lg:py-3 px-3 lg:px-4 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-200"
                        placeholder="your.email@example.com"
                        value={campaign.fromEmail}
                        onChange={(e) => {
                          setCampaign({ ...campaign, fromEmail: e.target.value });
                          setCurrentStep(1);
                        }}
                      />
                    </div>

                    <div>
                      <label htmlFor="password" className="block text-sm font-medium text-slate-700 mb-2">
                        Password
                      </label>
                      <input
                        id="password"
                        type="password"
                        className="mt-1 block w-full border border-slate-300 rounded-lg lg:rounded-xl shadow-sm py-2 lg:py-3 px-3 lg:px-4 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-200"
                        placeholder="Your email password"
                        value={campaign.password}
                        onChange={(e) => setCampaign({ ...campaign, password: e.target.value })}
                      />
                    </div>
                  </div>
                </div>

                {/* Subject and Preview */}
                <div className="grid grid-cols-1 gap-4 lg:gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2 flex items-center">
                      <i className="fas fa-tag mr-2 text-violet-500"></i>
                      Subject Line
                    </label>
                    <input
                      id="subject"
                      type="text"
                      className="mt-1 block w-full border border-slate-300 rounded-lg lg:rounded-xl shadow-sm py-2 lg:py-3 px-3 lg:px-4 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-200"
                      placeholder="Enter your subject line"
                      value={campaign.subject}
                      onChange={(e) => {
                        setCampaign({ ...campaign, subject: e.target.value });
                        setCurrentStep(1);
                      }}
                    />
                  </div>

                  <div>
                    <label htmlFor="preview" className="block text-sm font-medium text-slate-700 mb-2 flex items-center">
                      <i className="fas fa-eye mr-2 text-fuchsia-500"></i>
                      Preview Text
                    </label>
                    <input
                      id="preview"
                      type="text"
                      className="mt-1 block w-full border border-slate-300 rounded-lg lg:rounded-xl shadow-sm py-2 lg:py-3 px-3 lg:px-4 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-200"
                      placeholder="Enter preview text (appears in inbox)"
                      value={campaign.preview}
                      onChange={(e) => setCampaign({ ...campaign, preview: e.target.value })}
                    />
                  </div>
                </div>

                {/* Email Content */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2 flex items-center">
                    <i className="fas fa-envelope mr-2 text-violet-500"></i>
                    Email Content
                  </label>
                  <EnhancedEmailEditor 
                    content={campaign.bodyHtml} 
                    bodyText={campaign.bodyText}
                    onChange={handleContentChange}
                    onTextChange={handleBodyTextChange}
                    activeTab={activeTab} 
                    setActiveTab={setActiveTab} 
                    setCurrentStep={setCurrentStep} 
                  />
                </div>

                {/* Recipients */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="block text-sm font-medium text-slate-700 flex items-center">
                      <i className="fas fa-users mr-2 text-emerald-500"></i>
                      Recipients (To: {campaign.toEmails.length}, CC: {campaign.ccEmails.length})
                    </label>
                    <button 
                      type="button" 
                      onClick={() => setShowRecipientTips(!showRecipientTips)}
                      className="text-xs text-violet-500 hover:text-violet-700 flex items-center"
                    >
                      <i className={`fas fa-${showRecipientTips ? 'chevron-up' : 'chevron-down'} mr-1`}></i>
                      {showRecipientTips ? 'Hide tips' : 'Show tips'}
                    </button>
                  </div>
                  
                  <AnimatePresence>
                    {showRecipientTips && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="bg-violet-50 p-3 lg:p-4 rounded-lg lg:rounded-xl mb-4 text-sm text-violet-700"
                      >
                        <p><i className="fas fa-info-circle mr-2"></i>Enter email addresses separated by commas or new lines. You can also paste a list from a spreadsheet.</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  
                  {/* To Recipients */}
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-slate-700 mb-2">To:</label>
                    <div className="flex flex-col sm:flex-row gap-2">
                      <textarea
                        placeholder="Primary recipients (required)"
                        value={emailList}
                        onChange={(e) => setEmailList(e.target.value)}
                        rows={2}
                        className="flex-1 shadow-sm focus:ring-2 focus:ring-violet-500 focus:border-transparent block w-full sm:text-sm border border-slate-300 rounded-lg lg:rounded-xl transition-all duration-200"
                      />
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleAddRecipients('to')}
                        className="inline-flex items-center px-3 py-2 border border-slate-300 shadow-sm text-sm leading-4 font-medium rounded-full text-slate-700 bg-white hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500 transition-all duration-200"
                      >
                        <i className="fas fa-plus-circle mr-2 text-emerald-500"></i>
                        Add To
                      </motion.button>
                    </div>
                    
                    {campaign.toEmails.length > 0 && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-4"
                      >
                        <h4 className="text-sm font-medium text-slate-700 mb-2">To Recipients:</h4>
                        <ul className="mt-2 border border-slate-200 rounded-lg lg:rounded-xl divide-y divide-slate-200 max-h-40 overflow-y-auto shadow-inner">
                          {campaign.toEmails.map((email, index) => (
                            <motion.li 
                              key={index} 
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              className="pl-3 lg:pl-4 pr-3 lg:pr-4 py-2 lg:py-3 flex items-center justify-between text-sm"
                            >
                              <div className="w-0 flex-1 flex items-center">
                                <i className="far fa-envelope text-slate-400 mr-2"></i>
                                <span className="flex-1 truncate text-xs lg:text-sm">{email}</span>
                              </div>
                              <div className="ml-4 flex-shrink-0">
                                <button
                                  onClick={() => handleRemoveRecipient(email, 'to')}
                                  className="font-medium text-rose-600 hover:text-rose-500 transition-colors duration-200 p-1"
                                >
                                  <i className="fas fa-trash-alt text-sm"></i>
                                </button>
                              </div>
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </div>
                  
                  {/* CC Recipients */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">CC:</label>
                    <div className="flex flex-col sm:flex-row gap-2">
                      <textarea
                        placeholder="Carbon copy recipients (optional)"
                        value={ccEmailList}
                        onChange={(e) => setCcEmailList(e.target.value)}
                        rows={2}
                        className="flex-1 shadow-sm focus:ring-2 focus:ring-violet-500 focus:border-transparent block w-full sm:text-sm border border-slate-300 rounded-lg lg:rounded-xl transition-all duration-200"
                      />
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleAddRecipients('cc')}
                        className="inline-flex items-center px-3 py-2 border border-slate-300 shadow-sm text-sm leading-4 font-medium rounded-full text-slate-700 bg-white hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500 transition-all duration-200"
                      >
                        <i className="fas fa-plus-circle mr-2 text-blue-500"></i>
                        Add CC
                      </motion.button>
                    </div>
                    
                    {campaign.ccEmails.length > 0 && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-4"
                      >
                        <h4 className="text-sm font-medium text-slate-700 mb-2">CC Recipients:</h4>
                        <ul className="mt-2 border border-slate-200 rounded-lg lg:rounded-xl divide-y divide-slate-200 max-h-40 overflow-y-auto shadow-inner">
                          {campaign.ccEmails.map((email, index) => (
                            <motion.li 
                              key={index} 
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              className="pl-3 lg:pl-4 pr-3 lg:pr-4 py-2 lg:py-3 flex items-center justify-between text-sm"
                            >
                              <div className="w-0 flex-1 flex items-center">
                                <i className="far fa-envelope text-slate-400 mr-2"></i>
                                <span className="flex-1 truncate text-xs lg:text-sm">{email}</span>
                              </div>
                              <div className="ml-4 flex-shrink-0">
                                <button
                                  onClick={() => handleRemoveRecipient(email, 'cc')}
                                  className="font-medium text-rose-600 hover:text-rose-500 transition-colors duration-200 p-1"
                                >
                                  <i className="fas fa-trash-alt text-sm"></i>
                                </button>
                              </div>
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </div>
                </div>

                {/* Attachments */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2 flex items-center">
                    <i className="fas fa-paperclip mr-2 text-amber-500"></i>
                    Attachments ({campaign.attachments.length}/2)
                  </label>
                  <div className="flex items-center gap-3">
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleFileUpload}
                      className="hidden"
                      multiple
                    />
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => fileInputRef.current?.click()}
                      disabled={campaign.attachments.length >= 2}
                      className="inline-flex items-center px-4 py-2 border border-slate-300 shadow-sm text-sm leading-4 font-medium rounded-full text-slate-700 bg-white hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                    >
                      <i className="fas fa-plus-circle mr-2 text-amber-500"></i>
                      Add Attachments
                    </motion.button>
                    <span className="text-sm text-slate-500">Max 2 files allowed</span>
                  </div>
                  
                  {campaign.attachments.length > 0 && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-4"
                    >
                      <h4 className="text-sm font-medium text-slate-700 mb-2">Attachments:</h4>
                      <ul className="mt-2 border border-slate-200 rounded-lg lg:rounded-xl divide-y divide-slate-200 overflow-hidden shadow-inner">
                        {campaign.attachments.map((file, index) => (
                          <motion.li 
                            key={index} 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="pl-3 lg:pl-4 pr-3 lg:pr-4 py-2 lg:py-3 flex items-center justify-between text-sm"
                          >
                            <div className="w-0 flex-1 flex items-center">
                              <i className="far fa-file text-slate-400 mr-2"></i>
                              <span className="flex-1 truncate text-xs lg:text-sm">{file.name}</span>
                              <span className="ml-2 text-xs text-slate-500">({(file.size / 1024).toFixed(1)} KB)</span>
                            </div>
                            <div className="ml-4 flex-shrink-0">
                              <button
                                onClick={() => handleRemoveAttachment(index)}
                                className="font-medium text-rose-600 hover:text-rose-500 transition-colors duration-200 p-1"
                              >
                                <i className="fas fa-trash-alt text-sm"></i>
                              </button>
                            </div>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>

            <motion.footer 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-center text-slate-500 text-xs lg:text-sm"
            >
              <p>© {new Date().getFullYear()} Email Campaign Manager. All rights reserved.</p>
            </motion.footer>
          </div>
        </div>
      </div>

      {/* Overlay for mobile sidebar */}
      {sidebarOpen && !isDesktop && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
    </div>
  );
}

// Enhanced EmailEditor component with toolbar
function EnhancedEmailEditor({ 
  content, 
  bodyText, 
  onChange, 
  onTextChange, 
  activeTab, 
  setActiveTab, 
  setCurrentStep 
}: EnhancedEmailEditorProps) {
  const handleFormat = (command: string, value: string | null = null) => {
    document.execCommand(command, false, value || undefined);
    // Update content after formatting
    const visualEditor = document.getElementById('visual-editor');
    if (visualEditor) {
      onChange(visualEditor.innerHTML);
    }
    setCurrentStep(2);
  };

  return (
    <div className="border border-slate-300 rounded-lg lg:rounded-2xl overflow-hidden shadow-sm">
      <div className="border-b border-slate-200 bg-slate-50">
        <nav className="-mb-px flex">
          <button
            onClick={() => {
              setActiveTab('visual');
              setCurrentStep(2);
            }}
            className={`ml-4 lg:ml-8 py-3 lg:py-4 px-1 text-sm font-medium border-b-2 ${
              activeTab === 'visual'
                ? 'border-violet-500 text-violet-600'
                : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
            }`}
          >
            <i className="far fa-eye mr-2"></i>
            Visual
          </button>
          <button
            onClick={() => {
              setActiveTab('html');
              setCurrentStep(2);
            }}
            className={`ml-4 lg:ml-8 py-3 lg:py-4 px-1 text-sm font-medium border-b-2 ${
              activeTab === 'html'
                ? 'border-violet-500 text-violet-600'
                : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
            }`}
          >
            <i className="fas fa-code mr-2"></i>
            HTML
          </button>
          <button
            onClick={() => {
              setActiveTab('text');
              setCurrentStep(2);
            }}
            className={`ml-4 lg:ml-8 py-3 lg:py-4 px-1 text-sm font-medium border-b-2 ${
              activeTab === 'text'
                ? 'border-violet-500 text-violet-600'
                : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
            }`}
          >
            <i className="fas fa-align-left mr-2"></i>
            Plain Text
          </button>
        </nav>
        
        {activeTab === 'visual' && (
          <div className="px-3 lg:px-4 py-2 flex flex-wrap border-t border-slate-200">
            <button onClick={() => handleFormat('bold')} className="p-2 rounded hover:bg-slate-200 mx-1" title="Bold">
              <i className="fas fa-bold"></i>
            </button>
            <button onClick={() => handleFormat('italic')} className="p-2 rounded hover:bg-slate-200 mx-1" title="Italic">
              <i className="fas fa-italic"></i>
            </button>
            <button onClick={() => handleFormat('underline')} className="p-2 rounded hover:bg-slate-200 mx-1" title="Underline">
              <i className="fas fa-underline"></i>
            </button>
            <div className="border-r border-slate-300 h-6 mx-2 my-auto"></div>
            <button onClick={() => handleFormat('justifyLeft')} className="p-2 rounded hover:bg-slate-200 mx-1" title="Align Left">
              <i className="fas fa-align-left"></i>
            </button>
            <button onClick={() => handleFormat('justifyCenter')} className="p-2 rounded hover:bg-slate-200 mx-1" title="Align Center">
              <i className="fas fa-align-center"></i>
            </button>
            <button onClick={() => handleFormat('justifyRight')} className="p-2 rounded hover:bg-slate-200 mx-1" title="Align Right">
              <i className="fas fa-align-right"></i>
            </button>
            <div className="border-r border-slate-300 h-6 mx-2 my-auto"></div>
            <button onClick={() => handleFormat('insertUnorderedList')} className="p-2 rounded hover:bg-slate-200 mx-1" title="Bullet List">
              <i className="fas fa-list-ul"></i>
            </button>
            <button onClick={() => handleFormat('insertOrderedList')} className="p-2 rounded hover:bg-slate-200 mx-1" title="Numbered List">
              <i className="fas fa-list-ol"></i>
            </button>
            <div className="border-r border-slate-300 h-6 mx-2 my-auto"></div>
            <button onClick={() => {
              const url = prompt('Enter the URL:');
              if (url) handleFormat('createLink', url);
            }} className="p-2 rounded hover:bg-slate-200 mx-1" title="Insert Link">
              <i className="fas fa-link"></i>
            </button>
          </div>
        )}
      </div>
      
      {activeTab === 'html' ? (
        <textarea
          className="block w-full h-64 lg:h-96 p-3 lg:p-4 text-sm font-mono border-0 focus:ring-0 focus:outline-none resize-none"
          value={content}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Write your HTML content here..."
        />
      ) : activeTab === 'text' ? (
        <textarea
          className="block w-full h-64 lg:h-96 p-3 lg:p-4 text-sm border-0 focus:ring-0 focus:outline-none resize-none"
          value={bodyText}
          onChange={(e) => onTextChange(e.target.value)}
          placeholder="Write your plain text content here..."
        />
      ) : (
        <div
          id="visual-editor"
          contentEditable 
          dangerouslySetInnerHTML={{ __html: content }}
          onBlur={(e) => onChange(e.target.innerHTML)}
          className="block w-full h-64 lg:h-96 p-3 lg:p-4 text-sm border-0 focus:ring-0 focus:outline-none overflow-y-auto"
        />
      )}
    </div>
  );
}

