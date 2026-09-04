/**
 * GrameenVikas AI - MoSJE Micro-Entrepreneur Advisory Platform
 * Smart India Hackathon 2026 Presentation Edition
 * Team: Code Catalyst
 * Team Leader: Arnab Gayen | Co-Leader: Ujjawal Dubey
 * Members: Sanjana Kumari Balmiki, Sreeja Maity, Yash Raj, Vinit Buccha
 */

let currentLang = 'en';
let currentTheme = 'light';
let isAudioActive = false;
let speechSynth = window.speechSynthesis;
let marketRadarChart = null;
let cashflowChart = null;

// Initialize App on DOM Load
document.addEventListener('DOMContentLoaded', () => {
  initDropdowns();
  recalculateMarketData();
  runSchemeMatcher();
  calculateFinancials();
  renderProducts();
  renderTeam();
});

/* ==========================================================================
   1. Multi-lingual & Accessibility Engine
   ========================================================================== */
function switchLanguage(lang) {
  if (!APP_DATA.translations[lang]) return;
  currentLang = lang;
  const dict = APP_DATA.translations[lang];

  // Update translatable elements
  Object.keys(dict).forEach(key => {
    const el = document.getElementById(key);
    if (el) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = dict[key];
      } else {
        el.innerText = dict[key];
      }
    }
  });

  // Speak notification if audio readout active
  if (isAudioActive) {
    speakText(`Language changed to ${lang}`);
  }
}

function toggleAudioReadout() {
  isAudioActive = !isAudioActive;
  const banner = document.getElementById('ttsBanner');
  const ttsBtn = document.getElementById('ttsBtn');

  if (isAudioActive) {
    banner.style.display = 'block';
    ttsBtn.style.color = '#0284c7';
    ttsBtn.style.borderColor = '#0284c7';
    speakText("Audio readout enabled. GrameenVikas AI will assist you by reading text out loud.");
  } else {
    banner.style.display = 'none';
    ttsBtn.style.color = 'var(--slate-700)';
    ttsBtn.style.borderColor = 'var(--slate-600)';
    if (speechSynth) speechSynth.cancel();
  }
}

function stopAudioReadout() {
  isAudioActive = false;
  document.getElementById('ttsBanner').style.display = 'none';
  if (speechSynth) speechSynth.cancel();
}

function speakText(text) {
  if (!speechSynth || !isAudioActive) return;
  speechSynth.cancel(); // Stop ongoing speech

  const utterance = new SpeechSynthesisUtterance(text);
  
  // Set voice language code mapping
  const langMap = {
    en: 'en-IN',
    hi: 'hi-IN',
    bn: 'bn-IN',
    ta: 'ta-IN',
    mr: 'mr-IN',
    gu: 'gu-IN',
    te: 'te-IN'
  };

  utterance.lang = langMap[currentLang] || 'en-IN';
  utterance.rate = 0.95;
  speechSynth.speak(utterance);
}

function toggleTheme() {
  currentTheme = currentTheme === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', currentTheme);
  
  const themeIcon = document.getElementById('themeIcon');
  if (currentTheme === 'dark') {
    themeIcon.className = 'fa-solid fa-sun';
  } else {
    themeIcon.className = 'fa-solid fa-moon';
  }
}

/* ==========================================================================
   2. AI Business Advisory Copilot Logic
   ========================================================================== */
function askAiPreset(presetKey) {
  let promptText = "";
  if (presetKey === 'pottery') promptText = "How to set up a Pottery Unit under ₹50,000?";
  else if (presetKey === 'schemes') promptText = "Which MoSJE loan offers lowest interest for female SHGs?";
  else if (presetKey === 'handloom') promptText = "How to price handloom sarees for urban boutiques?";
  else if (presetKey === 'vermicompost') promptText = "What is the profit margin for 10 vermicompost beds?";
  else if (presetKey === 'dairy') promptText = "How to apply for MUDRA Kishor loan for Gir cow dairy?";

  document.getElementById('userInput').value = promptText;
  sendUserMessage();
}

function sendUserMessage() {
  const inputEl = document.getElementById('userInput');
  const query = inputEl.value.trim();
  if (!query) return;

  const chatHistory = document.getElementById('chatHistory');

  // Append user message
  const userMsgDiv = document.createElement('div');
  userMsgDiv.className = 'chat-msg user';
  userMsgDiv.innerText = query;
  chatHistory.appendChild(userMsgDiv);

  inputEl.value = '';
  chatHistory.scrollTop = chatHistory.scrollHeight;

  // Show typing indicator
  const typingDiv = document.createElement('div');
  typingDiv.className = 'chat-msg ai';
  typingDiv.id = 'typingIndicator';
  typingDiv.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Analyzing MoSJE schemes and hyper-local data...';
  chatHistory.appendChild(typingDiv);
  chatHistory.scrollTop = chatHistory.scrollHeight;

  // Generate AI Response after simulated delay
  setTimeout(() => {
    const indicator = document.getElementById('typingIndicator');
    if (indicator) indicator.remove();

    const responseText = generateAiResponse(query);

    const aiMsgDiv = document.createElement('div');
    aiMsgDiv.className = 'chat-msg ai';
    aiMsgDiv.innerHTML = `
      <div style="font-weight: 700; font-size: 0.8rem; color: var(--primary-700); margin-bottom: 4px;">
        <i class="fa-solid fa-robot"></i> GrameenVikas AI Assistant (MoSJE)
      </div>
      <div>${responseText}</div>
    `;
    chatHistory.appendChild(aiMsgDiv);
    chatHistory.scrollTop = chatHistory.scrollHeight;

    // Speak AI response if audio enabled
    if (isAudioActive) {
      const plainText = responseText.replace(/<[^>]*>?/gm, '');
      speakText(plainText);
    }
  }, 1200);
}

function generateAiResponse(userQuery) {
  const q = userQuery.toLowerCase();

  if (q.includes('pottery') || q.includes('clay')) {
    return APP_DATA.aiKnowledge.terracotta_pottery.replace(/\n/g, '<br>');
  } else if (q.includes('handloom') || q.includes('saree') || q.includes('weave')) {
    return APP_DATA.aiKnowledge.handloom_weaving.replace(/\n/g, '<br>');
  } else if (q.includes('vermicompost') || q.includes('fertilizer') || q.includes('organic')) {
    return APP_DATA.aiKnowledge.organic_fertilizer.replace(/\n/g, '<br>');
  } else if (q.includes('bamboo') || q.includes('furniture')) {
    return APP_DATA.aiKnowledge.bamboo_crafts.replace(/\n/g, '<br>');
  } else if (q.includes('dairy') || q.includes('cow') || q.includes('milk') || q.includes('poultry')) {
    return APP_DATA.aiKnowledge.dairy_poultry.replace(/\n/g, '<br>');
  } else if (q.includes('scheme') || q.includes('loan') || q.includes('interest') || q.includes('shg')) {
    return `<strong>Recommended MoSJE Financial Support:</strong><br>
    • <strong>VISVAS Scheme:</strong> Get 5% interest subvention directly credited into your bank account for SHG & individual micro-loans.<br>
    • <strong>NSFDC Micro-Credit:</strong> Up to ₹1.4 Lakh at 4.5% interest rate for SC female entrepreneurs.<br>
    • <strong>New Swarnima (NBCFDC):</strong> Low interest loan up to ₹2 Lakh for OBC women entrepreneurs.<br>
    You can match your eligibility in the <strong>Scheme Matcher</strong> section below!`;
  } else {
    return `Based on MoSJE rural advisory standards:<br>
    1. <strong>Feasibility Check:</strong> Your query aligns with micro-enterprise development under PM-DAKSH skill support.<br>
    2. <strong>Financial Structuring:</strong> We recommend applying for a 5% subvented loan under VISVAS or NSFDC Micro-Credit.<br>
    3. <strong>Market Linkage:</strong> You can list your products on the GeM (Government e-Marketplace) and ONDC networks.<br>
    Use our Financial Calculator below to project your 12-month net profits!`;
  }
}

function handleKeyPress(event) {
  if (event.key === 'Enter') {
    sendUserMessage();
  }
}

function toggleVoiceInput() {
  const micBtn = document.getElementById('micBtn');
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  if (!SpeechRecognition) {
    alert("Speech recognition is not natively supported in this browser version. You can type your query in the input box!");
    return;
  }

  const recognition = new SpeechRecognition();
  recognition.lang = currentLang === 'hi' ? 'hi-IN' : (currentLang === 'bn' ? 'bn-IN' : 'en-IN');
  
  micBtn.classList.add('listening');
  speakText("Listening... Please speak your question now.");

  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    document.getElementById('userInput').value = transcript;
    micBtn.classList.remove('listening');
    sendUserMessage();
  };

  recognition.onerror = () => {
    micBtn.classList.remove('listening');
  };

  recognition.start();
}

/* ==========================================================================
   3. Market Demand Predictor & Radar Chart Logic
   ========================================================================== */
function initDropdowns() {
  const stateSelect = document.getElementById('stateSelect');
  const districtSelect = document.getElementById('districtSelect');
  const sectorSelect = document.getElementById('sectorSelect');

  // Populate States
  APP_DATA.locations.forEach(loc => {
    const opt = document.createElement('option');
    opt.value = loc.state;
    opt.innerText = loc.state;
    stateSelect.appendChild(opt);
  });

  // Populate Sectors
  APP_DATA.sectors.forEach(sec => {
    const opt = document.createElement('option');
    opt.value = sec.id;
    opt.innerText = sec.name;
    sectorSelect.appendChild(opt);
  });

  updateDistricts();
}

function updateDistricts() {
  const stateVal = document.getElementById('stateSelect').value;
  const districtSelect = document.getElementById('districtSelect');
  districtSelect.innerHTML = '';

  const loc = APP_DATA.locations.find(l => l.state === stateVal);
  if (loc) {
    loc.districts.forEach(dist => {
      const opt = document.createElement('option');
      opt.value = dist;
      opt.innerText = dist;
      districtSelect.appendChild(opt);
    });
  }

  recalculateMarketData();
}

function recalculateMarketData() {
  const sectorId = document.getElementById('sectorSelect').value;
  const sector = APP_DATA.sectors.find(s => s.id === sectorId) || APP_DATA.sectors[0];

  document.getElementById('valDemandScore').innerText = `${sector.demandScore}/100`;
  document.getElementById('valCompetition').innerText = sector.competition;
  document.getElementById('valProfitMargin').innerText = sector.avgMargin;
  document.getElementById('valRawMaterial').innerText = `${sector.rawMaterial}/100`;

  document.getElementById('sectorNameTitle').innerText = sector.name;
  document.getElementById('sectorDescription').innerText = sector.description;
  document.getElementById('sectorMachinery').innerText = sector.keyMachinery;
  document.getElementById('sectorBuyers').innerText = sector.targetBuyers;

  renderMarketRadarChart(sector);
}

function renderMarketRadarChart(sector) {
  const ctx = document.getElementById('marketRadarChart').getContext('2d');
  if (marketRadarChart) marketRadarChart.destroy();

  marketRadarChart = new Chart(ctx, {
    type: 'radar',
    data: {
      labels: ['Local Demand', 'Profit Margin', 'Raw Material', 'Buyer Network', 'Scalability'],
      datasets: [{
        label: sector.name,
        data: [sector.demandScore, parseInt(sector.avgMargin), sector.rawMaterial, 85, 90],
        backgroundColor: 'rgba(0, 137, 123, 0.25)',
        borderColor: '#00897b',
        borderWidth: 2,
        pointBackgroundColor: '#f59e0b'
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        r: {
          angleLines: { color: 'rgba(0,0,0,0.1)' },
          suggestedMin: 0,
          suggestedMax: 100
        }
      }
    }
  });
}

function loadSectorIntoCalc() {
  const sectorId = document.getElementById('sectorSelect').value;
  const sector = APP_DATA.sectors.find(s => s.id === sectorId);

  if (sector) {
    if (sectorId === 'terracotta_pottery') {
      document.getElementById('calcRevenue').value = 45000;
      document.getElementById('calcRawMaterial').value = 16000;
      document.getElementById('calcLoan').value = 140000;
    } else if (sectorId === 'handloom_weaving') {
      document.getElementById('calcRevenue').value = 65000;
      document.getElementById('calcRawMaterial').value = 28000;
      document.getElementById('calcLoan').value = 200000;
    } else if (sectorId === 'organic_fertilizer') {
      document.getElementById('calcRevenue').value = 38000;
      document.getElementById('calcRawMaterial').value = 10000;
      document.getElementById('calcLoan').value = 80000;
    }

    calculateFinancials();
    document.getElementById('financials').scrollIntoView({ behavior: 'smooth' });
  }
}

/* ==========================================================================
   4. Scheme Matcher Engine
   ========================================================================== */
function runSchemeMatcher() {
  const category = document.getElementById('userCategory').value;
  const capital = parseFloat(document.getElementById('userCapital').value) || 140000;
  const container = document.getElementById('schemesContainer');
  container.innerHTML = '';

  APP_DATA.schemes.forEach(scheme => {
    let matchScore = 80;
    if (scheme.targetCategory.includes(category)) matchScore += 18;
    if (matchScore > 98) matchScore = 98;

    const card = document.createElement('div');
    card.className = 'glass-card scheme-card';
    card.innerHTML = `
      <div>
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 12px;">
          <span class="scheme-badge">${scheme.corporation}</span>
          <span style="font-weight: 800; color: var(--emerald-600); font-size: 0.9rem;">
            <i class="fa-solid fa-circle-check"></i> ${matchScore}% Match
          </span>
        </div>
        <h4 style="font-size: 1.15rem; color: var(--slate-900); margin-bottom: 6px;">${scheme.name}</h4>
        <p style="font-size: 0.82rem; color: var(--slate-600); font-weight: 600; margin-bottom: 14px;">${scheme.fullname}</p>

        <div style="background: var(--slate-50); padding: 12px; border-radius: 8px; font-size: 0.88rem; margin-bottom: 12px;">
          <div style="color: var(--primary-700); font-weight: 700; margin-bottom: 4px;">
            <i class="fa-solid fa-percent"></i> Benefit: ${scheme.interestSubvention}
          </div>
          <div><strong>Max Capital:</strong> ${scheme.maxLoan}</div>
          <div><strong>Tenure:</strong> ${scheme.tenure}</div>
        </div>

        <p style="font-size: 0.88rem; color: var(--slate-700); margin-bottom: 12px;">${scheme.eligibility}</p>
      </div>

      <button class="btn-secondary" style="width: 100%; justify-content: center; font-size: 0.88rem;" onclick="applyScheme('${scheme.name}', ${capital})">
        <i class="fa-solid fa-file-signature"></i> Apply via MoSJE Portal
      </button>
    `;
    container.appendChild(card);
  });
}

function applyScheme(schemeName, capital) {
  alert(`Application initiated for ${schemeName} with target capital ₹${capital.toLocaleString('en-IN')}.\nYour project details have been loaded into the Detailed Project Report (DPR).`);
  document.getElementById('dprSchemeMatched').innerText = schemeName;
  document.getElementById('dprTotalCapital').innerText = `₹${capital.toLocaleString('en-IN')}`;
  document.getElementById('dprContainer').scrollIntoView({ behavior: 'smooth' });
}

/* ==========================================================================
   5. Financial Structuring & 12-Month Cash Flow Engine
   ========================================================================== */
function calculateFinancials() {
  const rev = parseFloat(document.getElementById('calcRevenue').value) || 0;
  const raw = parseFloat(document.getElementById('calcRawMaterial').value) || 0;
  const labor = parseFloat(document.getElementById('calcLabor').value) || 0;
  const util = parseFloat(document.getElementById('calcUtilities').value) || 0;
  const loan = parseFloat(document.getElementById('calcLoan').value) || 0;
  const subventionRate = parseFloat(document.getElementById('calcSubvention').value) || 5;

  const totalOpex = raw + labor + util;
  
  // Calculate EMI with subvented interest (annual interest = 9.5% - subventionRate)
  const netRateAnnual = Math.max(1, 9.5 - subventionRate);
  const monthlyRate = (netRateAnnual / 100) / 12;
  const months = 36; // 3 years tenure
  const emi = Math.round((loan * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1));

  const netIncome = Math.round(rev - totalOpex - emi);
  const profitMargin = rev > 0 ? ((netIncome / rev) * 100).toFixed(1) : 0;

  // Update summary UI
  document.getElementById('resNetIncome').innerText = `₹${netIncome.toLocaleString('en-IN')}`;
  document.getElementById('resMargin').innerText = `Profit Margin: ~${profitMargin}%`;
  document.getElementById('resEmi').innerText = `₹${emi.toLocaleString('en-IN')}`;

  // Update DPR Printable Section synchronously
  document.getElementById('dprMonthRevenue').innerText = `₹${rev.toLocaleString('en-IN')}`;
  document.getElementById('dprAnnualRevenue').innerText = `₹${(rev * 12).toLocaleString('en-IN')}`;
  document.getElementById('dprMonthOpex').innerText = `₹${totalOpex.toLocaleString('en-IN')}`;
  document.getElementById('dprAnnualOpex').innerText = `₹${(totalOpex * 12).toLocaleString('en-IN')}`;
  document.getElementById('dprMonthEmi').innerText = `₹${emi.toLocaleString('en-IN')}`;
  document.getElementById('dprAnnualEmi').innerText = `₹${(emi * 12).toLocaleString('en-IN')}`;
  document.getElementById('dprMonthProfit').innerText = `₹${netIncome.toLocaleString('en-IN')}`;
  document.getElementById('dprAnnualProfit').innerText = `₹${(netIncome * 12).toLocaleString('en-IN')}`;
  document.getElementById('dprTotalCapital').innerText = `₹${loan.toLocaleString('en-IN')}`;
  document.getElementById('dprTableTotal').innerText = `₹${loan.toLocaleString('en-IN')}`;

  renderCashflowChart(rev, totalOpex, emi);
}

function renderCashflowChart(monthlyRev, monthlyOpex, monthlyEmi) {
  const ctx = document.getElementById('cashflowChart').getContext('2d');
  if (cashflowChart) cashflowChart.destroy();

  const labels = ['M1', 'M2', 'M3', 'M4', 'M5', 'M6', 'M7', 'M8', 'M9', 'M10', 'M11', 'M12'];
  const revenueData = labels.map((_, i) => Math.round(monthlyRev * (1 + (i * 0.03))));
  const expenseData = labels.map(() => monthlyOpex + monthlyEmi);
  const netProfitData = revenueData.map((r, i) => r - expenseData[i]);

  cashflowChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [
        {
          label: 'Net Profit (₹)',
          data: netProfitData,
          backgroundColor: '#10b981'
        },
        {
          label: 'Total Expenses (₹)',
          data: expenseData,
          backgroundColor: '#ef4444'
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: { stacked: false },
        y: { beginAtZero: true }
      }
    }
  });
}

/* ==========================================================================
   6. 1-Click Bankable DPR Print Generator
   ========================================================================== */
function printBankableDPR() {
  const now = new Date();
  document.getElementById('dprDate').innerText = `Date: ${now.toLocaleDateString('en-IN')}`;
  window.print();
}

/* ==========================================================================
   7. Hyper-Local Market Linkage & Team Rendering Logic
   ========================================================================== */
function renderProducts() {
  const container = document.getElementById('productsContainer');
  container.innerHTML = '';

  APP_DATA.marketProducts.forEach(prod => {
    const card = document.createElement('div');
    card.className = 'glass-card';
    card.style.padding = '20px';
    card.style.display = 'flex';
    card.style.flexDirection = 'column';
    card.style.justifySpaceBetween = 'space-between';

    card.innerHTML = `
      <div>
        <div style="height: 140px; background: var(--slate-100); border-radius: var(--radius-sm); padding: 20px; display: flex; align-items: center; justify-content: center; margin-bottom: 16px;">
          ${prod.imageSvg}
        </div>
        <span class="scheme-badge" style="background: rgba(245, 158, 11, 0.15); color: var(--accent-gold-hover); margin-bottom: 8px; display: inline-block;">
          <i class="fa-solid fa-award"></i> ${prod.badge}
        </span>
        <h4 style="font-size: 1.05rem; color: var(--slate-900); margin-bottom: 4px;">${prod.name}</h4>
        <div style="font-size: 0.82rem; color: var(--slate-600); margin-bottom: 12px;">
          <i class="fa-solid fa-user-circle"></i> ${prod.artisan} | <i class="fa-solid fa-location-dot"></i> ${prod.location}
        </div>
      </div>

      <div>
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px;">
          <div>
            <span style="font-size: 1.3rem; font-weight: 800; color: var(--primary-700);">${prod.price}</span>
            <span style="font-size: 0.85rem; text-decoration: line-through; color: var(--slate-600); margin-left: 6px;">${prod.originalPrice}</span>
          </div>
          <div style="font-size: 0.85rem; font-weight: 700; color: var(--accent-gold-hover);">
            <i class="fa-solid fa-star"></i> ${prod.rating}
          </div>
        </div>

        <button class="btn-primary" style="width: 100%; justify-content: center; font-size: 0.88rem;" onclick="connectBuyer('${prod.name}', '${prod.artisan}')">
          <i class="fa-solid fa-handshake"></i> Connect with Producer
        </button>
      </div>
    `;
    container.appendChild(card);
  });
}

function connectBuyer(productName, artisanName) {
  alert(`Connecting to ${artisanName} for procurement of "${productName}".\nTransaction route: GeM Govt e-Marketplace / ONDC Verified Channel.`);
}

function renderTeam() {
  const container = document.getElementById('teamContainer');
  if (!container) return;
  container.innerHTML = '';

  APP_DATA.teamMembers.forEach(member => {
    const card = document.createElement('div');
    const isLeader = member.roleType === 'leader';
    const isCoLeader = member.roleType === 'co-leader';

    card.className = `glass-card team-card ${isLeader || isCoLeader ? 'lead-card' : ''}`;

    let pillStyle = 'background: linear-gradient(135deg, #0284c7, #0ea5e9);';
    let badgeStyle = 'background: rgba(14, 165, 233, 0.15); color: #0284c7; border-color: rgba(14, 165, 233, 0.4);';
    let avatarBorder = '#0284c7';
    let iconClass = 'fa-user-check';

    if (isLeader) {
      pillStyle = 'background: linear-gradient(135deg, #d97706, #f59e0b);';
      badgeStyle = 'background: rgba(245, 158, 11, 0.2); color: #d97706; border-color: rgba(245, 158, 11, 0.5); font-weight: 800;';
      avatarBorder = 'var(--accent-gold)';
      iconClass = 'fa-crown';
    } else if (isCoLeader) {
      pillStyle = 'background: linear-gradient(135deg, #059669, #10b981);';
      badgeStyle = 'background: rgba(16, 185, 129, 0.2); color: #059669; border-color: rgba(16, 185, 129, 0.5); font-weight: 800;';
      avatarBorder = 'var(--emerald-600)';
      iconClass = 'fa-star';
    }

    card.innerHTML = `
      <div class="team-avatar" style="border-color: ${avatarBorder};">
        ${member.avatarSvg}
      </div>
      <span class="team-role-pill" style="${pillStyle}">${member.role}</span>
      <h3 style="font-size: 1.25rem; margin-bottom: 6px; color: var(--slate-900);">${member.name}</h3>
      <p style="font-size: 0.88rem; color: var(--slate-600); margin-bottom: 16px;">
        ${member.bio}
      </p>
      <span class="team-badge" style="${badgeStyle}">
        <i class="fa-solid ${iconClass}"></i> ${member.tag}
      </span>
    `;
    container.appendChild(card);
  });
}

/* ==========================================================================
   PWA & Mobile (Android / iOS / Windows) Installation Logic
   ========================================================================== */
let deferredPWAInstallPrompt = null;

// Service Worker Registration for Offline & Mobile PWA
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js')
      .then((reg) => {
        console.log('[SNU BizSathi PWA] Service Worker registered successfully:', reg.scope);
      })
      .catch((err) => {
        console.warn('[SNU BizSathi PWA] Service Worker registration failed:', err);
      });
  });
}

// Android / Chrome PWA Install Prompt Capture
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPWAInstallPrompt = e;
  console.log('[SNU BizSathi PWA] Native install prompt captured');
  
  const installBox = document.getElementById('pwaNativeInstallBox');
  if (installBox) {
    installBox.style.display = 'block';
  }
});

function openAppInstallModal() {
  const modal = document.getElementById('appInstallModal');
  if (modal) {
    modal.style.display = 'flex';
  }
}

function closeAppInstallModal() {
  const modal = document.getElementById('appInstallModal');
  if (modal) {
    modal.style.display = 'none';
  }
}

function triggerPWAInstall() {
  if (deferredPWAInstallPrompt) {
    executePWAInstall();
  } else {
    openAppInstallModal();
  }
}

function executePWAInstall() {
  if (deferredPWAInstallPrompt) {
    deferredPWAInstallPrompt.prompt();
    deferredPWAInstallPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('[SNU BizSathi PWA] User accepted PWA installation');
      } else {
        console.log('[SNU BizSathi PWA] User dismissed PWA installation');
      }
      deferredPWAInstallPrompt = null;
      closeAppInstallModal();
    });
  } else {
    openAppInstallModal();
  }
}

