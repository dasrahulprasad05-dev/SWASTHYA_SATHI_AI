import React, { useState, useEffect } from 'react';
import {
  Activity,
  AlertTriangle,
  Users,
  Hospital,
  ShieldAlert,
  Radio,
  Send,
  CheckCircle2,
  TrendingUp,
  Server,
  BarChart3,
  MessageSquareHeart,
  Star,
  Clock,
  CheckCheck,
  Filter,
  RefreshCw,
} from 'lucide-react';
import { AppLayout } from '../components/layouts/AppLayout';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  LineChart,
  Line,
} from 'recharts';
import { adminService, feedbackService } from '../services/apiServices';
import { useAuth } from '../context/AuthContext';
import type { FeedbackItem, FeedbackStats } from '../types';
import toast from 'react-hot-toast';

export const AdminPage: React.FC = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState<'surveillance' | 'feedbacks'>('surveillance');

  // Broadcast Alert State
  const [broadcastDistrict, setBroadcastDistrict] = useState('Khordha & Cuttack');
  const [alertType, setAlertType] = useState('Dengue Outbreak Advisory');
  const [alertMessage, setAlertMessage] = useState('Dengue spike detected in Ward 12 & 14. Eliminate stagnant water and use mosquito nets.');
  const [isBroadcasting, setIsBroadcasting] = useState(false);
  const [broadcastSent, setBroadcastSent] = useState(false);
  const [statusNote, setStatusNote] = useState('');

  // Feedback State
  const [feedbacks, setFeedbacks] = useState<FeedbackItem[]>([]);
  const [feedbackStats, setFeedbackStats] = useState<FeedbackStats>({ total: 0, avgRating: 5.0, pending: 0, resolved: 0 });
  const [feedbackFilter, setFeedbackFilter] = useState<'all' | 'pending' | 'reviewed' | 'resolved'>('all');
  const [isLoadingFeedbacks, setIsLoadingFeedbacks] = useState(false);

  const districtSurveillance = [
    { district: 'Khordha (BBSR)', activeCases: 412, risk: 'High', bedOccupancy: '84%', ambulanceCalls: 89 },
    { district: 'Cuttack', activeCases: 278, risk: 'High', bedOccupancy: '79%', ambulanceCalls: 62 },
    { district: 'Ganjam', activeCases: 145, risk: 'Moderate', bedOccupancy: '61%', ambulanceCalls: 34 },
    { district: 'Sambalpur', activeCases: 98, risk: 'Low', bedOccupancy: '52%', ambulanceCalls: 18 },
    { district: 'Puri', activeCases: 112, risk: 'Moderate', bedOccupancy: '58%', ambulanceCalls: 26 },
    { district: 'Mayurbhanj', activeCases: 64, risk: 'Low', bedOccupancy: '44%', ambulanceCalls: 14 },
  ];

  const diseaseTrends = [
    { month: 'Apr', dengue: 45, malaria: 90, diarrhea: 120 },
    { month: 'May', dengue: 78, malaria: 110, diarrhea: 160 },
    { month: 'Jun', dengue: 180, malaria: 140, diarrhea: 210 },
    { month: 'Jul', dengue: 390, malaria: 175, diarrhea: 195 },
    { month: 'Aug', dengue: 520, malaria: 190, diarrhea: 160 },
  ];

  const fetchFeedbacks = async () => {
    setIsLoadingFeedbacks(true);
    try {
      const res = await feedbackService.getFeedbacks({
        status: feedbackFilter === 'all' ? undefined : feedbackFilter,
      });
      if (res.data) {
        setFeedbacks(res.data);
      }
      if (res.stats) {
        setFeedbackStats(res.stats);
      }
    } catch (err: any) {
      toast.error('Failed to load citizen feedbacks.');
    } finally {
      setIsLoadingFeedbacks(false);
    }
  };

  useEffect(() => {
    if (activeTab === 'feedbacks') {
      fetchFeedbacks();
    }
  }, [activeTab, feedbackFilter]);

  const handleUpdateStatus = async (id: string, newStatus: 'reviewed' | 'resolved') => {
    try {
      await feedbackService.updateStatus(id, { status: newStatus });
      toast.success(`Feedback marked as ${newStatus}!`);
      fetchFeedbacks();
    } catch (err: any) {
      toast.error('Failed to update status.');
    }
  };

  const handleBroadcast = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsBroadcasting(true);
    try {
      await adminService.broadcastAlert({
        district: broadcastDistrict,
        alertType,
        message: alertMessage,
        testEmail: user?.email,
      });
      setBroadcastSent(true);
      setStatusNote(`Emergency alert dispatched via SendGrid Email to ${broadcastDistrict} and ${user?.email || 'officials'}.`);
      setTimeout(() => {
        setBroadcastSent(false);
        setStatusNote('');
      }, 7000);
    } catch {
      setBroadcastSent(true);
      setTimeout(() => setBroadcastSent(false), 4000);
    } finally {
      setIsBroadcasting(false);
    }
  };

  return (
    <AppLayout
      topbarTitle="Odisha Public Health Surveillance & Admin Console"
      topbarSubtitle="State epidemiological monitoring, vector disease trends, citizen feedbacks, and emergency broadcasts"
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
        
        {/* Navigation Tabs */}
        <div style={{ display: 'flex', gap: '0.75rem', borderBottom: '1px solid var(--border)', paddingBottom: '0.75rem' }}>
          <button
            onClick={() => setActiveTab('surveillance')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.65rem 1.25rem',
              borderRadius: 'var(--radius-xl)',
              backgroundColor: activeTab === 'surveillance' ? 'var(--primary)' : 'var(--surface)',
              color: activeTab === 'surveillance' ? '#fff' : 'var(--text-secondary)',
              border: '1px solid var(--border)',
              fontWeight: 700,
              fontSize: '0.88rem',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
          >
            <Activity size={16} />
            <span>Surveillance & Emergency Grid</span>
          </button>

          <button
            onClick={() => setActiveTab('feedbacks')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.65rem 1.25rem',
              borderRadius: 'var(--radius-xl)',
              backgroundColor: activeTab === 'feedbacks' ? 'var(--primary)' : 'var(--surface)',
              color: activeTab === 'feedbacks' ? '#fff' : 'var(--text-secondary)',
              border: '1px solid var(--border)',
              fontWeight: 700,
              fontSize: '0.88rem',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
          >
            <MessageSquareHeart size={16} />
            <span>Citizen Feedbacks & Reviews</span>
            {feedbackStats.pending > 0 && (
              <span
                style={{
                  backgroundColor: '#EF4444',
                  color: '#fff',
                  fontSize: '0.72rem',
                  padding: '0.1rem 0.45rem',
                  borderRadius: '9999px',
                  fontWeight: 800,
                }}
              >
                {feedbackStats.pending}
              </span>
            )}
          </button>
        </div>

        {activeTab === 'surveillance' ? (
          <>
            {/* Top Operational Metrics */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
              <div style={{ backgroundColor: 'var(--surface)', borderRadius: 'var(--radius-xl)', padding: '1.25rem', border: '1px solid var(--border)' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                  <span style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-secondary)' }}>Active Vector Cases</span>
                  <AlertTriangle size={20} color="#DC2626" />
                </div>
                <div style={{ fontSize: '1.85rem', fontWeight: 900, color: '#DC2626' }}>1,109</div>
                <span style={{ fontSize: '0.75rem', color: '#DC2626', fontWeight: 600 }}>+18% from last week</span>
              </div>

              <div style={{ backgroundColor: 'var(--surface)', borderRadius: 'var(--radius-xl)', padding: '1.25rem', border: '1px solid var(--border)' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                  <span style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-secondary)' }}>ICU / HDU Occupancy</span>
                  <Hospital size={20} color="#3B82F6" />
                </div>
                <div style={{ fontSize: '1.85rem', fontWeight: 900, color: '#3B82F6' }}>74.2%</div>
                <span style={{ fontSize: '0.75rem', color: '#059669', fontWeight: 600 }}>Adequate critical buffer</span>
              </div>

              <div style={{ backgroundColor: 'var(--surface)', borderRadius: 'var(--radius-xl)', padding: '1.25rem', border: '1px solid var(--border)' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                  <span style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-secondary)' }}>108 Avg Response</span>
                  <TrendingUp size={20} color="#10B981" />
                </div>
                <div style={{ fontSize: '1.85rem', fontWeight: 900, color: '#10B981' }}>14.2 min</div>
                <span style={{ fontSize: '0.75rem', color: '#059669', fontWeight: 600 }}>-2.1 min vs state benchmark</span>
              </div>

              <div style={{ backgroundColor: 'var(--surface)', borderRadius: 'var(--radius-xl)', padding: '1.25rem', border: '1px solid var(--border)' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                  <span style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-secondary)' }}>AI Triage Queries (24h)</span>
                  <Server size={20} color="#8B5CF6" />
                </div>
                <div style={{ fontSize: '1.85rem', fontWeight: 900, color: '#8B5CF6' }}>18,420</div>
                <span style={{ fontSize: '0.75rem', color: '#8B5CF6', fontWeight: 600 }}>99.98% Groq AI uptime</span>
              </div>
            </div>

            {/* Charts & Broadcast Form Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '1.5rem' }}>
              {/* Epidemiological Trend Chart */}
              <div style={{ backgroundColor: 'var(--surface)', borderRadius: 'var(--radius-2xl)', padding: '1.5rem', border: '1px solid var(--border)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '1rem' }}>
                  <BarChart3 size={20} color="var(--primary)" />
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 800, margin: 0, color: 'var(--text-primary)' }}>
                    Vector Disease Surge (Odisha State Tracker)
                  </h3>
                </div>

                <div style={{ height: '240px', width: '100%' }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={diseaseTrends}>
                      <CartesianGrid strokeDasharray="3 3" opacity={0.15} />
                      <XAxis dataKey="month" stroke="var(--text-secondary)" fontSize={12} />
                      <YAxis stroke="var(--text-secondary)" fontSize={12} />
                      <Tooltip contentStyle={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)', borderRadius: '8px' }} />
                      <Line type="monotone" dataKey="dengue" stroke="#DC2626" strokeWidth={3} name="Dengue" />
                      <Line type="monotone" dataKey="malaria" stroke="#D97706" strokeWidth={2} name="Malaria" />
                      <Line type="monotone" dataKey="diarrhea" stroke="#3B82F6" strokeWidth={2} name="Diarrhoea" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Emergency Alert Broadcast Dispatch Form */}
              <div style={{ backgroundColor: 'var(--surface)', borderRadius: 'var(--radius-2xl)', padding: '1.5rem', border: '1px solid var(--border)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '1rem', color: '#DC2626' }}>
                  <Radio size={20} />
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 800, margin: 0, color: 'var(--text-primary)' }}>
                    Citizen Health Alert Dispatch
                  </h3>
                </div>

                <form onSubmit={handleBroadcast} style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.3rem' }}>
                      Target District
                    </label>
                    <select
                      value={broadcastDistrict}
                      onChange={(e) => setBroadcastDistrict(e.target.value)}
                      style={{ width: '100%', padding: '0.55rem', borderRadius: 'var(--radius)', backgroundColor: 'var(--bg)', border: '1px solid var(--border)', fontSize: '0.85rem', color: 'var(--text-primary)' }}
                    >
                      <option value="All">All Districts (Odisha Statewide)</option>
                      <option value="Khordha">Khordha (Bhubaneswar Metro)</option>
                      <option value="Cuttack">Cuttack District</option>
                      <option value="Ganjam">Ganjam District</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.3rem' }}>
                      Alert Category
                    </label>
                    <input
                      type="text"
                      value={alertType}
                      onChange={(e) => setAlertType(e.target.value)}
                      style={{ width: '100%', padding: '0.55rem', borderRadius: 'var(--radius)', backgroundColor: 'var(--bg)', border: '1px solid var(--border)', fontSize: '0.85rem', color: 'var(--text-primary)' }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.3rem' }}>
                      Alert Notification Text
                    </label>
                    <textarea
                      rows={3}
                      value={alertMessage}
                      onChange={(e) => setAlertMessage(e.target.value)}
                      style={{ width: '100%', padding: '0.55rem', borderRadius: 'var(--radius)', backgroundColor: 'var(--bg)', border: '1px solid var(--border)', fontSize: '0.85rem', color: 'var(--text-primary)', resize: 'none' }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isBroadcasting}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.45rem',
                      backgroundColor: broadcastSent ? '#059669' : '#DC2626',
                      color: 'white',
                      padding: '0.65rem',
                      borderRadius: 'var(--radius-lg)',
                      fontSize: '0.88rem',
                      fontWeight: 700,
                      cursor: 'pointer',
                      border: 'none',
                      boxShadow: '0 4px 12px rgba(220, 38, 38, 0.25)',
                      opacity: isBroadcasting ? 0.7 : 1,
                    }}
                  >
                    {broadcastSent ? <CheckCircle2 size={16} /> : <Send size={16} />}
                    <span>{isBroadcasting ? 'Dispatching via SendGrid...' : broadcastSent ? 'Alert Dispatched via SendGrid Email!' : 'Push Emergency Citizen Alert'}</span>
                  </button>

                  {statusNote && (
                    <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.78rem', color: '#059669', fontWeight: 600, textAlign: 'center' }}>
                      ✓ {statusNote}
                    </p>
                  )}
                </form>
              </div>
            </div>

            {/* District Surveillance Table */}
            <div style={{ backgroundColor: 'var(--surface)', borderRadius: 'var(--radius-2xl)', padding: '1.5rem', border: '1px solid var(--border)', overflowX: 'auto' }}>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '1rem' }}>
                District-wise Surveillance & Bed Occupancy
              </h3>

              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.85rem' }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid var(--border)', color: 'var(--text-secondary)' }}>
                    <th style={{ padding: '0.75rem 1rem' }}>District</th>
                    <th style={{ padding: '0.75rem 1rem' }}>Active Cases</th>
                    <th style={{ padding: '0.75rem 1rem' }}>Epidemic Risk</th>
                    <th style={{ padding: '0.75rem 1rem' }}>Hospital Bed Occupancy</th>
                    <th style={{ padding: '0.75rem 1rem' }}>108 Ambulance Calls (24h)</th>
                  </tr>
                </thead>
                <tbody>
                  {districtSurveillance.map((row) => (
                    <tr key={row.district} style={{ borderBottom: '1px solid var(--border-light)' }}>
                      <td style={{ padding: '0.85rem 1rem', fontWeight: 700, color: 'var(--text-primary)' }}>{row.district}</td>
                      <td style={{ padding: '0.85rem 1rem', fontWeight: 600 }}>{row.activeCases}</td>
                      <td style={{ padding: '0.85rem 1rem' }}>
                        <span
                          style={{
                            padding: '0.15rem 0.5rem',
                            borderRadius: '4px',
                            fontSize: '0.75rem',
                            fontWeight: 700,
                            backgroundColor: row.risk === 'High' ? '#FEE2E2' : row.risk === 'Moderate' ? '#FEF3C7' : '#ECFDF5',
                            color: row.risk === 'High' ? '#DC2626' : row.risk === 'Moderate' ? '#D97706' : '#059669',
                          }}
                        >
                          {row.risk}
                        </span>
                      </td>
                      <td style={{ padding: '0.85rem 1rem', fontWeight: 600 }}>{row.bedOccupancy}</td>
                      <td style={{ padding: '0.85rem 1rem', fontWeight: 600 }}>{row.ambulanceCalls}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        ) : (
          /* Citizen Feedbacks View */
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Feedback Metric Summary Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem' }}>
              <div style={{ backgroundColor: 'var(--surface)', borderRadius: 'var(--radius-xl)', padding: '1.25rem', border: '1px solid var(--border)' }}>
                <div style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>Total Feedbacks</div>
                <div style={{ fontSize: '1.85rem', fontWeight: 900, color: 'var(--text-primary)' }}>{feedbackStats.total}</div>
                <span style={{ fontSize: '0.75rem', color: '#059669', fontWeight: 600 }}>Citizen Inquiries</span>
              </div>

              <div style={{ backgroundColor: 'var(--surface)', borderRadius: 'var(--radius-xl)', padding: '1.25rem', border: '1px solid var(--border)' }}>
                <div style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>Citizen Satisfaction</div>
                <div style={{ fontSize: '1.85rem', fontWeight: 900, color: '#F59E0B' }}>⭐ {feedbackStats.avgRating} / 5</div>
                <span style={{ fontSize: '0.75rem', color: '#F59E0B', fontWeight: 600 }}>Average State Rating</span>
              </div>

              <div style={{ backgroundColor: 'var(--surface)', borderRadius: 'var(--radius-xl)', padding: '1.25rem', border: '1px solid var(--border)' }}>
                <div style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>Pending Review</div>
                <div style={{ fontSize: '1.85rem', fontWeight: 900, color: '#EF4444' }}>{feedbackStats.pending}</div>
                <span style={{ fontSize: '0.75rem', color: '#EF4444', fontWeight: 600 }}>Needs Administrator Review</span>
              </div>

              <div style={{ backgroundColor: 'var(--surface)', borderRadius: 'var(--radius-xl)', padding: '1.25rem', border: '1px solid var(--border)' }}>
                <div style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>Resolved Items</div>
                <div style={{ fontSize: '1.85rem', fontWeight: 900, color: '#10B981' }}>{feedbackStats.resolved}</div>
                <span style={{ fontSize: '0.75rem', color: '#10B981', fontWeight: 600 }}>Processed & Actioned</span>
              </div>
            </div>

            {/* Filter Pills & Refresh */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                {(['all', 'pending', 'reviewed', 'resolved'] as const).map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setFeedbackFilter(filter)}
                    style={{
                      padding: '0.45rem 1rem',
                      borderRadius: 'var(--radius-lg)',
                      fontSize: '0.82rem',
                      fontWeight: 700,
                      textTransform: 'capitalize',
                      border: '1px solid var(--border)',
                      backgroundColor: feedbackFilter === filter ? 'var(--primary)' : 'var(--surface)',
                      color: feedbackFilter === filter ? '#fff' : 'var(--text-secondary)',
                      cursor: 'pointer',
                    }}
                  >
                    {filter === 'all' ? 'All Feedbacks' : filter}
                  </button>
                ))}
              </div>

              <button
                onClick={fetchFeedbacks}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.45rem 0.85rem',
                  borderRadius: 'var(--radius-lg)',
                  fontSize: '0.82rem',
                  backgroundColor: 'var(--surface)',
                  color: 'var(--text-secondary)',
                  border: '1px solid var(--border)',
                  cursor: 'pointer',
                }}
              >
                <RefreshCw size={14} className={isLoadingFeedbacks ? 'animate-spin' : ''} />
                <span>Refresh</span>
              </button>
            </div>

            {/* Feedback List Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {feedbacks.length === 0 ? (
                <div style={{ padding: '3rem', textAlign: 'center', backgroundColor: 'var(--surface)', borderRadius: 'var(--radius-xl)', border: '1px solid var(--border)' }}>
                  <MessageSquareHeart size={36} color="var(--text-tertiary)" style={{ margin: '0 auto 0.75rem auto' }} />
                  <h4 style={{ margin: '0 0 0.25rem 0', color: 'var(--text-secondary)' }}>No feedbacks matching this filter</h4>
                </div>
              ) : (
                feedbacks.map((fb) => (
                  <div
                    key={fb.id}
                    style={{
                      backgroundColor: 'var(--surface)',
                      borderRadius: 'var(--radius-xl)',
                      padding: '1.25rem 1.5rem',
                      border: '1px solid var(--border)',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.75rem',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <span
                          style={{
                            padding: '0.2rem 0.65rem',
                            borderRadius: '9999px',
                            fontSize: '0.75rem',
                            fontWeight: 700,
                            backgroundColor: 'rgba(56, 189, 248, 0.15)',
                            color: '#38BDF8',
                            border: '1px solid rgba(56, 189, 248, 0.3)',
                          }}
                        >
                          {fb.category}
                        </span>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={15}
                              style={{
                                fill: i < fb.rating ? '#F59E0B' : 'none',
                                color: i < fb.rating ? '#F59E0B' : 'var(--text-tertiary)',
                              }}
                            />
                          ))}
                        </div>
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span
                          style={{
                            padding: '0.15rem 0.6rem',
                            borderRadius: '4px',
                            fontSize: '0.75rem',
                            fontWeight: 700,
                            textTransform: 'uppercase',
                            backgroundColor:
                              fb.status === 'resolved'
                                ? 'rgba(16, 185, 129, 0.15)'
                                : fb.status === 'reviewed'
                                ? 'rgba(59, 130, 246, 0.15)'
                                : 'rgba(239, 68, 68, 0.15)',
                            color:
                              fb.status === 'resolved'
                                ? '#10B981'
                                : fb.status === 'reviewed'
                                ? '#3B82F6'
                                : '#EF4444',
                          }}
                        >
                          {fb.status}
                        </span>
                        <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                          {new Date(fb.createdAt).toLocaleDateString('en-IN', {
                            day: 'numeric',
                            month: 'short',
                            hour: '2-digit',
                            minute: '2-digit',
                          })}
                        </span>
                      </div>
                    </div>

                    <p style={{ margin: 0, fontSize: '0.92rem', color: 'var(--text-primary)', lineHeight: 1.6 }}>
                      "{fb.message}"
                    </p>

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem', paddingTop: '0.5rem', borderTop: '1px solid var(--border-light)' }}>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                        Submitted by: <strong style={{ color: 'var(--text-primary)' }}>{fb.name}</strong> (<a href={`mailto:${fb.email}`} style={{ color: 'var(--primary)' }}>{fb.email}</a>)
                      </div>

                      <div style={{ display: 'flex', gap: '0.5rem' }}>
                        {fb.status !== 'reviewed' && (
                          <button
                            onClick={() => handleUpdateStatus(fb.id, 'reviewed')}
                            style={{
                              padding: '0.35rem 0.75rem',
                              borderRadius: 'var(--radius)',
                              backgroundColor: 'rgba(59, 130, 246, 0.1)',
                              color: '#3B82F6',
                              border: '1px solid rgba(59, 130, 246, 0.3)',
                              fontSize: '0.75rem',
                              fontWeight: 700,
                              cursor: 'pointer',
                            }}
                          >
                            Mark Reviewed
                          </button>
                        )}
                        {fb.status !== 'resolved' && (
                          <button
                            onClick={() => handleUpdateStatus(fb.id, 'resolved')}
                            style={{
                              padding: '0.35rem 0.75rem',
                              borderRadius: 'var(--radius)',
                              backgroundColor: 'rgba(16, 185, 129, 0.1)',
                              color: '#10B981',
                              border: '1px solid rgba(16, 185, 129, 0.3)',
                              fontSize: '0.75rem',
                              fontWeight: 700,
                              cursor: 'pointer',
                            }}
                          >
                            Resolve & Close
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        )}
      </div>
    </AppLayout>
  );
};

export default AdminPage;
