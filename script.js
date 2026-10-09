const projects=[
{id:'01',cat:['linux'],status:'COMPLETED',kicker:'WEEK 01 · LINUX / VIRTUALISATION',title:'Kali Linux on VirtualBox',summary:'Built and documented a controlled Kali Linux lab environment as the starting point for practical cybersecurity work.',why:'Establish a repeatable security-learning environment and demonstrate core Linux and virtualisation skills.',objective:'Deploy Kali Linux in Oracle VirtualBox, configure resources and networking, access the system and perform basic system and network checks.',tools:'Kali Linux v2026.2 · Oracle VirtualBox 7.2 · Windows host · NAT networking',actions:'Configured the virtual machine, verified user and working-directory information, and performed a basic connectivity test while documenting evidence.',skills:'Linux administration · Virtualisation · Basic networking · Troubleshooting · Evidence collection',outcome:'A working cybersecurity lab environment was established and documented as the foundation for later security exercises.',relevance:'Controlled lab environments provide a safe place to practise security tooling, administration and troubleshooting.',evidence:[['GitHub Repository','https://github.com/KaboSekoto/Cybersecurity-1st-week-running-Kali-linux-on-Virtualbox'],['Screenshots',''],['Write-up',''],['Demo','']]},
{id:'02',cat:['network'],status:'COMPLETED',kicker:'WEEK 02 · NETWORK RECONNAISSANCE',title:'Nmap / Zenmap Network Reconnaissance',summary:'Mapped a local Wi-Fi network in a controlled lab to identify the local subnet, live hosts and host addressing information.',why:'Understand device visibility on a local network and build practical reconnaissance skills.',objective:'Determine the local IP/subnet, discover live hosts, record IP addresses and inspect available MAC-address information.',tools:'Zenmap · Nmap · Kali Linux · Windows ipconfig · Wi-Fi LAN',actions:'Reviewed local network configuration, performed host discovery and documented discovered host information and limitations.',skills:'Network reconnaissance · Host discovery · IP addressing · MAC analysis · Network documentation',outcome:'The exercise demonstrated how local network visibility depends on subnet, device configuration and scan conditions.',relevance:'Asset discovery and network visibility are foundations for vulnerability management, monitoring and incident investigation.',evidence:[['GitHub Repository',''],['Zenmap Log',''],['Screenshots',''],['Topology Diagram','']]},
{id:'03',cat:['assessment'],status:'COMPLETED',kicker:'WEEK 03 · SECURITY ASSESSMENT',title:'PDF Password Security Assessment',summary:'Conducted an authorised password security assessment against three protected PDF documents in a controlled training laboratory.',why:'Understand password protection, hash extraction, offline password recovery and credential validation within an authorised environment.',objective:'Assess three password protected PDFs, extract password hashes, conduct controlled offline recovery and validate recovered credentials.',tools:'John the Ripper · Johnny GUI · Networkwalks · Windows',actions:'Prepared assessment targets, extracted password hashes, conducted authorised offline recovery and validated the results.',skills:'Password hash extraction · Offline password recovery · Credential validation · PDF security assessment · Security reporting',outcome:'3/3 hashes were extracted, 3/3 passwords were recovered and 3/3 were validated in the controlled training environment.',relevance:'Password-security assessments help organisations identify weak protection and understand risks associated with predictable credentials.',evidence:[['GitHub Repository',''],['Assessment Report',''],['Screenshots',''],['Demo Video','']]},
{id:'05',cat:['soc','personal'],status:'COMPLETED',kicker:'FLAGSHIP SOC PROJECT · HEALTHCARE SECURITY OPERATIONS',title:'HealthShield — Healthcare Security Operations Platform',summary:'Built a healthcare oriented SOC platform that brings identity, endpoint, web, patient data, email and network telemetry into one workflow, correlating related activity into risk scored incidents for investigation. from identity, endpoint, web, patient data, email and network sources into correlated, risk scored incidents for investigation.',why:'Demonstrate practical SOC engineering beyond isolated log review by connecting telemetry collection, correlation, detection, risk scoring and incident response into one workflow.',objective:'Build a local security operations platform with a central collector and dashboard for monitoring security telemetry, correlating related activity, identifying suspicious behaviour and generating analyst ready incidents.',tools:'PowerShell · Windows Security Events · Event IDs 4624/4625, 4720/4732, 4663 and 4104 · Central event collector · Endpoint telemetry · Web security telemetry · Patient data audit events · Email telemetry · Network telemetry',actions:'Built and refined the local HealthShield platform, connected telemetry to a central collector and dashboard, normalised events, added detection and correlation logic, assigned risk scores, and generated incident records with timelines and context. The documented demonstration uses controlled test events and synthetic patient data.',skills:'SOC operations · Detection engineering · Event correlation · Windows security monitoring · PowerShell automation · Central collection · Risk scoring · Incident investigation · Healthcare security · Security telemetry · Technical documentation',outcome:'The local platform demonstrates central collection, dashboard monitoring and incident generation. A documented account compromise and sensitive data exposure scenario links authentication activity with patient record access and data export to create a CRITICAL incident. Testing is performed locally with controlled events and synthetic data.',relevance:'Healthcare environments combine identity, endpoint, application and sensitive data risks. HealthShield demonstrates how a SOC can bring signals together into a single investigation instead of treating each event as an isolated alert.',evidence:[['GitHub Repository','https://github.com/iamskottk/HealthShield-HealthCare-Security/tree/main'],['Project README','https://github.com/iamskottk/HealthShield-HealthCare-Security/blob/main/README.md'],['Live Portfolio Feature','https://iamskottk.github.io/portfolio/']]},
{id:'06',cat:['personal'],status:'COMPLETED',kicker:'PERSONAL PROJECT · FULL-STACK / CLINIC WORKFLOW',title:'ClinicCallSystem',summary:'Built a browser based clinic communication system to coordinate requests between reception and clinical staff in real time.',why:'Solve a practical clinic communication problem with a lightweight internal web application.',objective:'Create a simple shared workflow where clinic staff can send structured requests and receive live status information through browser based interfaces.',tools:'Python · Flask · HTML · CSS · JavaScript · REST API · Browser based clients',actions:'Built the Flask backend and web interfaces, implemented shared application state, structured request codes, timestamps and role oriented browser views, then tested the system across connected devices on the local network.',skills:'Full stack development · Flask APIs · JavaScript · HTTP/REST · Network troubleshooting · Workflow design · Practical problem solving',outcome:'A working ClinicCallSystem prototype was developed and progressively extended into a clinic specific real time communication and workflow platform.',relevance:'Demonstrates the ability to translate an operational problem into a working technical solution while considering usability, networking and security.',evidence:[['Public Repository','https://github.com/iamskottk/Clinic-Communication-System'],['Project Status','Built and tested locally'],['Demo','']]},
{id:'04',cat:['assessment','network'],status:'COMPLETED',kicker:'WEEK 04 · BLACK-BOX SECURITY TESTING',title:'Mediroza General Hospital Security Assessment',summary:'Conducted a controlled black box security assessment of the Mediroza General Hospital training environment, focusing on reconnaissance, web application testing and evidence based reporting.',why:'Apply practical penetration testing methodology to a realistic health services environment while keeping testing controlled and evidence based.',objective:'Assess the exposed attack surface, investigate the web application, identify security weaknesses and document findings and limitations.',tools:'Burp Suite · Firefox · Kali Linux · Web security testing tools · Manual reconnaissance',actions:'Performed controlled reconnaissance and web application testing, investigated application behaviour through an intercepting proxy and documented observations for the assessment report.',skills:'Black-box testing · Web application assessment · Reconnaissance · Burp Suite · Evidence collection · Security reporting',outcome:'Completed the practical assessment workflow and documented findings from a controlled training environment.',relevance:'Health service environments require disciplined security testing because confidentiality, integrity and availability of systems and patient data are critical.',evidence:[['GitHub Repository','https://github.com/iamskottk/MEDIROZA-GENERAL-HOSPITAL'],['Assessment Report',''],['Evidence',''],['Demo','']]},
];
const grid=document.getElementById('projectGrid'),modal=document.getElementById('modal'),content=document.getElementById('modalContent');
function render(filter='all'){const ordered=projects.slice().sort((a,b)=>Number(a.id)-Number(b.id));grid.innerHTML=ordered.filter(p=>filter==='all'||p.cat.includes(filter)).map(p=>`<article class="project"><div class="preview"><span class="num" style="color:#61f2b0!important">${p.id}</span><span class="state">${p.status}</span></div><div class="projectBody"><small>${p.kicker}</small><h3>${p.title}</h3><p>${p.summary}</p><button data-id="${p.id}">View detailed project →</button></div></article>`).join('');document.querySelectorAll('.projectBody button').forEach(b=>b.onclick=()=>openProject(b.dataset.id))}
function openProject(id){const p=projects.find(x=>x.id===id);const evidence=p.evidence.length?p.evidence.map(x=>x[1]?`<a href="${x[1]}" target="_blank">${x[0]} ↗</a>`:`<span class="placeholder">${x[0]} — add URL</span>`).join(''):`<span class="placeholder">Evidence — add after completion</span>`;content.innerHTML=`<small>${p.kicker}</small><h2 class="modalTitle">${p.title}</h2><p class="summary">${p.summary}</p><div class="detailGrid">${[['Why',p.why],['Objective',p.objective],['Tools / Technologies',p.tools],['What I actually did',p.actions],['Skills developed',p.skills],['Outcome',p.outcome],['Real world relevance',p.relevance]].map(x=>`<div class="detail"><h4>${x[0]}</h4><p>${x[1]}</p></div>`).join('')}</div><div class="evidence">${evidence}</div>`;modal.classList.add('open');modal.setAttribute('aria-hidden','false');document.body.style.overflow='hidden'}
function closeModal(){modal.classList.remove('open');modal.setAttribute('aria-hidden','true');document.body.style.overflow=''}
document.getElementById('close').onclick=closeModal;document.querySelector('.backdrop').onclick=closeModal;document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal()});document.querySelectorAll('.filters button').forEach(b=>b.onclick=()=>{document.querySelectorAll('.filters button').forEach(x=>x.classList.remove('active'));b.classList.add('active');render(b.dataset.filter)});const toggle=document.getElementById('navToggle'),nav=document.getElementById('nav');toggle.onclick=()=>nav.classList.toggle('open');document.querySelectorAll('nav a').forEach(a=>a.onclick=()=>nav.classList.remove('open'));document.getElementById('year').textContent=new Date().getFullYear();render();


/* ===== FULL WOW INTERACTION ENGINE ===== */
(()=>{
  const body=document.body;
  const noise=document.createElement('div'); noise.className='cyber-noise'; body.appendChild(noise);
  const particles=document.createElement('div'); particles.className='cyber-particles'; body.appendChild(particles);
  for(let i=0;i<34;i++){
    const p=document.createElement('i'); p.className='cyber-particle';
    p.style.left=(Math.random()*100)+'%'; p.style.top=(Math.random()*115)+'%';
    p.style.setProperty('--dx',((Math.random()-.5)*180)+'px');
    p.style.animationDuration=(10+Math.random()*18)+'s';
    p.style.animationDelay=(-Math.random()*18)+'s';
    p.style.opacity=(.12+Math.random()*.28);
    particles.appendChild(p);
  }

  if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches && matchMedia('(pointer:fine)').matches){
    const ring=document.createElement('div'); ring.className='wow-cursor';
    const dot=document.createElement('div'); dot.className='wow-cursor-dot';
    body.append(ring,dot);
    let x=innerWidth/2,y=innerHeight/2,rx=x,ry=y;
    addEventListener('pointermove',e=>{
      x=e.clientX;y=e.clientY;
      body.style.setProperty('--mx',x+'px');body.style.setProperty('--my',y+'px');
    });
    const loop=()=>{rx+=(x-rx)*.16;ry+=(y-ry)*.16;ring.style.left=rx+'px';ring.style.top=ry+'px';dot.style.left=x+'px';dot.style.top=y+'px';requestAnimationFrame(loop)};loop();
    document.querySelectorAll('a,button,.project,.cards article,.featuredProject .wrap').forEach(el=>{
      el.addEventListener('mouseenter',()=>body.classList.add('cursor-hover'));
      el.addEventListener('mouseleave',()=>body.classList.remove('cursor-hover'));
    });
  }

  const observer=new IntersectionObserver(entries=>{
    entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}});
  },{threshold:.12,rootMargin:'0px 0px -45px'});
  document.querySelectorAll('section:not(#home),.featuredProject,.githubRepos,.education,.contactBox').forEach(el=>el.classList.add('reveal'));
  document.querySelectorAll('.projectGrid,.cards.three,.stats').forEach(el=>el.classList.add('reveal-stagger'));
  document.querySelectorAll('.reveal,.reveal-stagger').forEach(el=>observer.observe(el));

  if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches){
    document.querySelectorAll('.project,.cards article').forEach(card=>{
      card.addEventListener('pointermove',e=>{
        if(innerWidth<900)return;
        const r=card.getBoundingClientRect(),px=(e.clientX-r.left)/r.width-.5,py=(e.clientY-r.top)/r.height-.5;
        card.style.transform='perspective(900px) rotateX('+(-py*3)+'deg) rotateY('+(px*4)+'deg) translateY(-4px)';
      });
      card.addEventListener('pointerleave',()=>card.style.transform='');
    });
    const feature=document.querySelector('.featuredProject .wrap');
    if(feature) feature.addEventListener('pointermove',e=>{
      if(innerWidth<900)return;
      const r=feature.getBoundingClientRect(),px=(e.clientX-r.left)/r.width-.5,py=(e.clientY-r.top)/r.height-.5;
      feature.style.transform='perspective(1200px) rotateX('+(py*-1.5)+'deg) rotateY('+(px*2)+'deg)';
    });
    if(feature) feature.addEventListener('pointerleave',()=>feature.style.transform='');
  }

  const term=document.querySelector('.term');
  if(term && !window.matchMedia('(prefers-reduced-motion: reduce)').matches){
    const lines=[...term.querySelectorAll('p')];
    lines.forEach((line,i)=>{line.style.opacity='0';line.style.transform='translateX(-8px)'});
    lines.forEach((line,i)=>setTimeout(()=>{line.style.opacity='1';line.style.transform='none';line.style.transition='opacity .45s ease,transform .45s ease'},700+i*430));
  }

  let last=scrollY;
  addEventListener('scroll',()=>{
    const dy=scrollY-last; last=scrollY;
    if(Math.abs(dy)>2) document.documentElement.style.setProperty('--scroll-speed',Math.min(1.5,Math.abs(dy)/20));
  },{passive:true});
})();
