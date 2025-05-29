import React, { useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend
} from 'recharts';
import { Slider } from '@mui/material';
import { motion, AnimatePresence } from "framer-motion";

const COLORS = ['#111827', '#9CA3AF'];

const formatRupees = (value: number) => `₹${Math.round(value).toLocaleString('en-IN')}`;

const Calculators: React.FC = () => {
  const [type, setType] = useState<'sip' | 'swp'>('sip');

  // SIP states
  const [sipAmount, setSipAmount] = useState(5000);
  const [sipRate, setSipRate] = useState(12);
  const [sipTime, setSipTime] = useState(10);

  // SWP states
  const [swpInitial, setSwpInitial] = useState(500000);
  const [swpWithdraw, setSwpWithdraw] = useState(2000);
  const [swpRate, setSwpRate] = useState(8);
  const [swpTime, setSwpTime] = useState(10);

  const months = type === 'sip' ? sipTime * 12 : swpTime * 12;
  const monthlyRate = (type === 'sip' ? sipRate : swpRate) / 12 / 100;

  const calculateSIP = () => {
    let futureValue = 0;
    for (let i = 0; i < sipTime * 12; i++) {
      futureValue = (futureValue + sipAmount) * (1 + sipRate / 12 / 100);
    }
    return futureValue;
  };

const calculateSWP = () => {
  const monthlyRate = swpRate / 12 / 100;
  const totalMonths = swpTime * 12;
  const PMT = swpWithdraw;

  // Future value formula (projection only)
  const futureValue = PMT * ((Math.pow(1 + monthlyRate, totalMonths) - 1) / monthlyRate);

  // Actual simulation
  let corpus = swpInitial;
  let totalWithdrawn = 0;
  let swpData: { name: string; Invested: number; Value: number }[] = [];

  for (let i = 1; i <= totalMonths; i++) {
    corpus *= (1 + monthlyRate);
    if (corpus >= PMT) {
      corpus -= PMT;
      totalWithdrawn += PMT;
    } else {
      totalWithdrawn += corpus;
      corpus = 0;
    }

    swpData.push({
      name: `Month ${i}`,
      Invested: swpInitial,
      Value: Math.round(corpus),
    });

    if (corpus <= 0) break;
  }

  const totalInvested = swpInitial;
  const remainingCorpus = Math.round(corpus);
  const interestEarned = Math.max(0, totalWithdrawn + remainingCorpus - totalInvested);
  const gain = interestEarned;

  return {
    formulaProjectedTotalWithdrawals: Math.round(futureValue),
    actualMonths: swpData.length,
    data: swpData,
    totalWithdrawn: Math.round(totalWithdrawn),
    remainingCorpus,
    totalInvested,
    interestEarned,
    gain,
  };
};


  const sipValue = calculateSIP();
  const { formulaProjectedTotalWithdrawals, actualMonths,
    data: swpChartData,
    totalWithdrawn, 
    interestEarned, 
    totalInvested,
    remainingCorpus, 
    gain: swpGain, } = calculateSWP();
  const futureValue = type === 'sip' ? sipValue : totalWithdrawn + remainingCorpus;
  const investedAmount = type === 'sip' ? sipAmount * sipTime * 12 : totalInvested;
  const gain = futureValue - investedAmount;



  const sipChartData = Array.from({ length: sipTime * 12 }, (_, i) => {
    const totalInvested = sipAmount * (i + 1);
    let val = 0;
    for (let j = 0; j <= i; j++) {
      val = (val + sipAmount) * (1 + sipRate / 12 / 100);
    }
    return {
      name: `Month ${i + 1}`,
      Invested: Math.round(totalInvested),
      Value: Math.round(val),
    };
  });

  const data = type === 'sip' ? sipChartData : swpChartData;

  return (
    <div className="p-4 max-w-screen-xl mx-auto pt-20">
      <div className="flex justify-center mb-6 sticky top-20 z-50 bg-white py-2">
        <button
          className={`px-4 py-2 rounded-l-md text-white ${type === 'sip' ? 'bg-[#111827]' : 'bg-gray-400'}`}
          onClick={() => setType('sip')}
        >
          SIP Calculator
        </button>
        <button
          className={`px-4 py-2 rounded-r-md text-white ${type === 'swp' ? 'bg-[#111827]' : 'bg-gray-400'}`}
          onClick={() => setType('swp')}
        >
          SWP Calculator
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div className="space-y-6">
          {type === 'sip' ? (
            <>
              <label className="block">
                <span className="text-sm font-semibold text-gray-700">Monthly Investment (₹)</span>
                <input
                  type="number"
                  value={sipAmount}
                  onChange={(e) => setSipAmount(Number(e.target.value))}
                  className="mt-1 w-full border rounded-md px-3 py-2"
                />
                <Slider
                  value={sipAmount}
                  onChange={(e, val) => setSipAmount(val as number)}
                  min={500}
                  max={100000}
                  step={100}
                  sx={{ color: '#111827', mt: 2 }}
                />
              </label>
              <label className="block">
                <span className="text-sm font-semibold text-gray-700">Expected Annual Return (%)</span>
                <input
                  type="number"
                  value={sipRate}
                  onChange={(e) => setSipRate(Number(e.target.value))}
                  className="mt-1 w-full border rounded-md px-3 py-2"
                />
                <Slider
                  value={sipRate}
                  onChange={(e, val) => setSipRate(val as number)}
                  min={1}
                  max={20}
                  step={0.5}
                  sx={{ color: '#111827', mt: 2 }}
                />
              </label>
              <label className="block">
                <span className="text-sm font-semibold text-gray-700">Time Period (Years)</span>
                <input
                  type="number"
                  value={sipTime}
                  onChange={(e) => setSipTime(Number(e.target.value))}
                  className="mt-1 w-full border rounded-md px-3 py-2"
                />
                <Slider
                  value={sipTime}
                  onChange={(e, val) => setSipTime(val as number)}
                  min={1}
                  max={30}
                  step={1}
                  sx={{ color: '#111827', mt: 2 }}
                />
              </label>
            </>
          ) : (
            <>
              <label className="block">
                <span className="text-sm font-semibold text-gray-700">Initial Investment (₹)</span>
                <input
                  type="number"
                  value={swpInitial}
                  onChange={(e) => setSwpInitial(Number(e.target.value))}
                  className="mt-1 w-full border rounded-md px-3 py-2"
                />
                <Slider
                  value={swpInitial}
                  onChange={(e, val) => setSwpInitial(val as number)}
                  min={10000}
                  max={2000000}
                  step={1000}
                  sx={{ color: '#111827', mt: 2 }}
                />
              </label>
              <label className="block">
                <span className="text-sm font-semibold text-gray-700">Monthly Withdrawal (₹)</span>
                <input
                  type="number"
                  value={swpWithdraw}
                  onChange={(e) => setSwpWithdraw(Number(e.target.value))}
                  className="mt-1 w-full border rounded-md px-3 py-2"
                />
                <Slider
                  value={swpWithdraw}
                  onChange={(e, val) => setSwpWithdraw(val as number)}
                  min={500}
                  max={50000}
                  step={100}
                  sx={{ color: '#111827', mt: 2 }}
                />
              </label>
              <label className="block">
                <span className="text-sm font-semibold text-gray-700">Expected Annual Return (%)</span>
                <input
                  type="number"
                  value={swpRate}
                  onChange={(e) => setSwpRate(Number(e.target.value))}
                  className="mt-1 w-full border rounded-md px-3 py-2"
                />
                <Slider
                  value={swpRate}
                  onChange={(e, val) => setSwpRate(val as number)}
                  min={1}
                  max={20}
                  step={0.5}
                  sx={{ color: '#111827', mt: 2 }}
                />
              </label>
              <label className="block">
                <span className="text-sm font-semibold text-gray-700">Time Period (Years)</span>
                <input
                  type="number"
                  value={swpTime}
                  onChange={(e) => setSwpTime(Number(e.target.value))}
                  className="mt-1 w-full border rounded-md px-3 py-2"
                />
                <Slider
                  value={swpTime}
                  onChange={(e, val) => setSwpTime(val as number)}
                  min={1}
                  max={30}
                  step={1}
                  sx={{ color: '#111827', mt: 2 }}
                />
              </label>
            </>
          )}

          <div className="bg-gray-100 p-4 rounded-md">
            <p className="text-gray-800 font-medium">Invested: {formatRupees(investedAmount)}</p>
            <p className="text-gray-800 font-medium">Total Corpus Utilized: {formatRupees(totalWithdrawn + remainingCorpus)}</p>
            <p className="text-gray-800 font-medium">Projected Withdrawals Value (Formula): {formatRupees(formulaProjectedTotalWithdrawals)}</p>
            <p className="text-gray-800 font-medium">Gain: {formatRupees(gain)}</p>
            {type === 'swp' && (
            <>
                <p className="text-gray-800 font-medium">Total Withdrawn: {formatRupees(totalWithdrawn)}</p>
                <p className="text-gray-800 font-medium">Remaining Corpus: {formatRupees(remainingCorpus)}</p>
                <p className="text-gray-800 font-medium">Total Interest Earned: {formatRupees(interestEarned)}</p>
                <p className="text-gray-800 font-medium">Sustained for: {actualMonths} months</p>
            </>
            )}


          </div>

          
        </div>

        <div className="space-y-6">
          <div className="w-full h-48 md:h-56">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 10 }}>
                <XAxis dataKey="name" tick={{ fontSize: 10 }} interval="preserveStartEnd" />
                <YAxis tickFormatter={(value) => `₹${Math.round(value).toLocaleString('en-IN')}`} tick={{ fontSize: 10 }} />
                <Tooltip formatter={(value) => formatRupees(Number(value))} />
                <Legend verticalAlign="top" height={36} />
                <Line type="monotone" dataKey="Value" stroke="#111827" strokeWidth={2} />
                <Line type="monotone" dataKey="Invested" stroke="#9CA3AF" strokeDasharray="5 5" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="w-full h-48">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Tooltip formatter={(value) => formatRupees(Number(value))} />
                <Legend verticalAlign="bottom" height={36} formatter={(value) => value} />
                <Pie
                  data={[{ name: 'Invested', value: investedAmount }, { name: 'Gain', value: gain }]
                  }
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={60}
                  paddingAngle={5}
                  dataKey="value"
                  label
                >
                  {COLORS.map((color, index) => (
                    <Cell key={`cell-${index}`} fill={color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <AnimatePresence mode="wait">
  {type === 'sip' && (
    <motion.div
  key="sip-explained"
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: -10 }}
  transition={{ duration: 0.3 }}
  className="mt-8 bg-white p-6 rounded-lg shadow-md"
>
  <h2 className="text-xl font-bold text-[#111827] mb-4">Understanding Systematic Investment Plan (SIP)</h2>

  <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">📌 What is SIP?</h3>
  <p className="text-gray-700 leading-relaxed">
    A Systematic Investment Plan (SIP) allows you to invest a fixed amount in a mutual fund scheme at regular intervals—
    typically monthly. It’s a disciplined, stress-free way to invest in the market without trying to time it.
    SIPs help you build wealth gradually while benefiting from the power of compounding and rupee cost averaging.
  </p>

  <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">⚙️ How Does SIP Work?</h3>
  <ul className="list-disc list-inside text-gray-700 leading-relaxed">
    <li>You choose a mutual fund and invest a fixed amount regularly (e.g., ₹2,000/month).</li>
    <li>Units are purchased based on the fund’s NAV on the date of investment.</li>
    <li>Over time, you accumulate units at varying prices, averaging your cost.</li>
    <li>The longer you invest, the more you benefit from compounding returns.</li>
  </ul>

  <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">🎯 Why Choose SIP?</h3>
  <ul className="list-disc list-inside text-gray-700 leading-relaxed">
    <li><strong>Disciplined Saving:</strong> Encourages consistent investing and financial discipline.</li>
    <li><strong>Rupee Cost Averaging:</strong> Helps reduce risk of market volatility by averaging unit costs.</li>
    <li><strong>Power of Compounding:</strong> Small regular investments grow significantly over time.</li>
    <li><strong>Flexible & Accessible:</strong> Start small, increase later, and withdraw anytime if needed.</li>
  </ul>

  <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">📉 Risks to Consider</h3>
  <ul className="list-disc list-inside text-gray-700 leading-relaxed">
    <li><strong>Market Risk:</strong> SIPs invest in the market, so returns are not guaranteed.</li>
    <li><strong>Long-Term Commitment:</strong> Benefits are best realized when investing consistently for several years.</li>
  </ul>

  <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">🧮 Real-world Example</h3>
  <p className="text-gray-700 leading-relaxed">
    Imagine you invest ₹5,000 monthly in a mutual fund that gives 12% average annual return. In 10 years,
    you would have invested ₹6,00,000, but your fund could grow to over ₹11,50,000 — nearly doubling your investment
    through the power of compounding.
  </p>
</motion.div>

  )}

  {type === 'swp' && (
    <motion.div
  key="swp-explained"
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: -10 }}
  transition={{ duration: 0.3 }}
  className="mt-8 bg-white p-6 rounded-lg shadow-md"
>
  <h2 className="text-xl font-bold text-[#111827] mb-4">
    Understanding Systematic Withdrawal Plan (SWP)
  </h2>

  <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">📌 What is SWP?</h3>
  <p className="text-gray-700 leading-relaxed">
    A Systematic Withdrawal Plan (SWP) lets you withdraw a fixed amount from your mutual fund investment at regular intervals—
    monthly, quarterly, or annually—while the remaining corpus continues to grow.
    It’s ideal for retirees or those seeking consistent income without liquidating the full investment.
  </p>

  <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">⚙️ How Does SWP Work?</h3>
  <ul className="list-disc list-inside text-gray-700 leading-relaxed">
    <li>You invest a lump sum amount in a mutual fund.</li>
    <li>Then, you specify a fixed withdrawal amount and frequency (e.g., ₹5,000 every month).</li>
    <li>Withdrawals are made from your fund units while the remaining amount continues to earn returns.</li>
    <li>If returns are higher than the withdrawal rate, your capital may last longer or even grow.</li>
    <li>If withdrawals exceed returns, your capital will gradually reduce and may eventually deplete.</li>
  </ul>

  <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">🎯 Why Choose SWP?</h3>
  <ul className="list-disc list-inside text-gray-700 leading-relaxed">
    <li><strong>Regular Income:</strong> Provides consistent payouts—perfect for retirement or passive income.</li>
    <li><strong>Flexibility:</strong> You can choose the withdrawal amount, frequency, and stop anytime.</li>
    <li><strong>Tax Efficiency:</strong> Only the capital gains are taxed, and often at a lower rate.</li>
    <li><strong>Capital Preservation:</strong> If planned properly, your money keeps earning while you withdraw.</li>
  </ul>

  <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">📉 Risks to Consider</h3>
  <ul className="list-disc list-inside text-gray-700 leading-relaxed">
    <li><strong>Market Risk:</strong> If the market underperforms, your corpus may deplete faster.</li>
    <li><strong>Withdrawal Risk:</strong> Withdrawing more than your investment earns may shorten its life.</li>
  </ul>

  <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">🧮 Real-world Example</h3>
  <p className="text-gray-700 leading-relaxed">
    Suppose you invest ₹10,00,000 in a mutual fund earning ~8% annually and withdraw ₹5,000 every month. While ₹5,000 is deducted,
    the remaining ₹9,95,000 continues to grow. Over time, your capital may still grow or stay stable depending on market performance and withdrawal rate.
  </p>
</motion.div>

  )}
</AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Calculators;
