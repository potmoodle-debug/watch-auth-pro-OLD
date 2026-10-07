const WATCHES = {
  "ROLEX|126610LN": {
    brand:"Rolex", reference:"126610LN", model:"Submariner Date", mapping:"DEMO VERIFIED",
    meta:["41 mm","Automatic","Oystersteel","Cal. 3235"],
    safety:{level:"safe",title:"No known special opening restriction in prototype",copy:"Proceed with normal bench opening procedure and local handling policy."},
    expected:[
      {key:"movement",label:"Movement",value:"Cal. 3235",severity:"high",hint:"Verify calibre marking and architecture."},
      {key:"dial",label:"Dial",value:"Black",severity:"medium",hint:"Check configuration against reference and production period."},
      {key:"bezel",label:"Bezel",value:"Black ceramic",severity:"medium",hint:"Check insert material, markings and fit."},
      {key:"case",label:"Case",value:"Oystersteel",severity:"high",hint:"Check reference architecture and case construction."},
      {key:"bracelet",label:"Bracelet",value:"Oyster",severity:"medium",hint:"Check bracelet/clasp configuration."}
    ],
    serial:"Prototype: serial-format intelligence should be checked against the expected production era, but serial alone must not be treated as proof of authenticity.",
    referenceIntel:"Prototype exact-reference record. Production period, movement mapping, dial/bezel configuration and bracelet relationships belong here as structured fields, not a prose dump.",
    provenance:"Prototype record only. Production version should show source, source quality, date verified, researcher/reviewer and field-level confidence."
  },
  "TUDOR|25600T": {
    brand:"Tudor", reference:"25600T", model:"Pelagos", mapping:"SUPPORTED · REVIEW",
    meta:["42 mm","Automatic","Titanium","Cal. MT5612"],
    safety:{level:"safe",title:"No special opening restriction flagged in prototype",copy:"Continue with normal bench procedure. Confirm case/reference before relying on the expected profile."},
    expected:[
      {key:"movement",label:"Movement",value:"Cal. MT5612",severity:"high",hint:"Confirm calibre and movement architecture."},
      {key:"case",label:"Case",value:"Titanium",severity:"high",hint:"Confirm case material and construction."},
      {key:"dial",label:"Dial",value:"Pelagos configuration",severity:"medium",hint:"Check dial layout and expected generation details."},
      {key:"bezel",label:"Bezel",value:"Diver bezel",severity:"medium",hint:"Inspect insert/markings against expected variant."}
    ],
    serial:"Prototype: production-era logic should be shown only where supported. Unknown serial intelligence should remain absent rather than generate filler.",
    referenceIntel:"This record deliberately demonstrates a mapping that should retain a review state. The app should never upgrade partial research to certainty just because a reference was found.",
    provenance:"Prototype mapping based on test data carried into this rebuild. Production use requires explicit source review and field-level evidence."
  },
  "BREITLING|A13340": {
    brand:"Breitling", reference:"A13340", model:"Chronomat / reference family", mapping:"FAMILY MATCH",
    meta:["Automatic chronograph","Reference family","Manual variant confirmation"],
    safety:{level:"safe",title:"No special opening restriction flagged in prototype",copy:"Proceed normally, but confirm exact variant before treating family-level expectations as exact."},
    expected:[
      {key:"movement",label:"Movement",value:"Valjoux 7750-derived Breitling calibre family",severity:"high",hint:"Confirm movement architecture and calibre markings."},
      {key:"case",label:"Case architecture",value:"Chronomat-family configuration",severity:"medium",hint:"Compare case, pushers and rider-tab layout."},
      {key:"dial",label:"Dial",value:"Variant-dependent",severity:"low",hint:"Do not flag a conflict until exact variant is resolved."}
    ],
    serial:"Prototype: Breitling serial intelligence should include production-date support only when backed by a reliable serial source.",
    referenceIntel:"Family-level match. This is intentionally not presented as an exact variant. A production system should branch to known sub-variants instead of flattening them into one record.",
    provenance:"Prototype family record. Production system should retain exact citations and confidence per field."
  },
  "SINN|UX": {
    brand:"Sinn", reference:"UX", model:"UX / HYDRO family", mapping:"SAFETY DEMO",
    meta:["Quartz diver","HYDRO technology","Special handling"],
    safety:{level:"stop",title:"DO NOT OPEN — special fluid-filled construction",copy:"Prototype safety rule: stop the normal opening workflow and follow manufacturer/specialist handling guidance before any case opening."},
    expected:[
      {key:"construction",label:"Construction",value:"HYDRO fluid-filled system",severity:"high",hint:"Do not continue normal case-opening workflow."},
      {key:"movement",label:"Movement type",value:"Quartz",severity:"medium",hint:"Confirm exact variant before detailed movement expectations."},
      {key:"case",label:"Case",value:"Diver configuration",severity:"medium",hint:"Inspect externally unless specialist procedure permits opening."}
    ],
    serial:"Prototype: serial intelligence intentionally withheld where it would add no useful supported guidance.",
    referenceIntel:"Safety-first demo record. In the production app, a hazardous/special-construction rule must interrupt the workflow before detailed bench steps are offered.",
    provenance:"Prototype safety example only. Production use requires exact model/reference coverage and verified manufacturer guidance."
  }
};

const els = {
  brand:document.getElementById("brandInput"),
  ref:document.getElementById("referenceInput"),
  serial:document.getElementById("serialInput"),
  workflow:document.getElementById("workflowInput"),
  load:document.getElementById("loadBtn"),
  reset:document.getElementById("resetBtn"),
  workspace:document.getElementById("workspace"),
  empty:document.getElementById("emptyState"),
  safety:document.getElementById("safetyGate"),
  brandLabel:document.getElementById("brandLabel"),
  modelLabel:document.getElementById("modelLabel"),
  identityMeta:document.getElementById("identityMeta"),
  mapping:document.getElementById("mappingConfidence"),
  rows:document.getElementById("comparisonRows"),
  progress:document.getElementById("checkProgress"),
  discrepancies:document.getElementById("discrepancyList"),
  matrix:document.getElementById("evidenceMatrix"),
  assessment:document.getElementById("assessmentResult"),
  actions:document.getElementById("benchActions"),
  refIntel:document.getElementById("referenceIntel"),
  serialIntel:document.getElementById("serialIntel"),
  provenance:document.getElementById("provenance"),
  finalNote:document.getElementById("finalNote"),
  generateNote:document.getElementById("generateNoteBtn"),
  copyNote:document.getElementById("copyNoteBtn"),
  copyNoteStatus:document.getElementById("copyNoteStatus")
};

let current = null;
let observed = {};

function norm(v){ return String(v||"").trim().toUpperCase(); }

function unknownRecord(){
  return {
    brand:els.brand.value || "Unknown brand",
    reference:els.ref.value || "No reference",
    model:"Reference not mapped",
    mapping:"UNKNOWN",
    meta:["Research required"],
    safety:{level:"caution",title:"Opening status unknown",copy:"No verified safety rule is available for this reference. Confirm special construction before opening."},
    expected:[],
    serial:"No supported serial intelligence is loaded for this reference.",
    referenceIntel:"No exact mapping is present. Create a structured research task rather than inferring specifications from a similar-looking reference.",
    provenance:"No production evidence attached. Status: UNKNOWN."
  };
}

function loadWatch(){
  const key = norm(els.brand.value)+"|"+norm(els.ref.value);
  current = WATCHES[key] || unknownRecord();
  observed = {};
  render();
}

function render(){
  els.workspace.classList.remove("hidden");
  els.empty.classList.add("hidden");

  els.safety.className = "safety-gate "+current.safety.level;
  const icon = current.safety.level==="stop" ? "⛔" : current.safety.level==="caution" ? "⚠" : "✓";
  els.safety.innerHTML = `<div class="safety-title">${icon} ${current.safety.title}</div><div class="safety-copy">${current.safety.copy}</div>`;

  els.brandLabel.textContent = current.brand+" · "+current.reference;
  els.modelLabel.textContent = current.model;
  els.identityMeta.innerHTML = current.meta.map(x=>`<span>${x}</span>`).join("");
  els.mapping.textContent = current.mapping;

  renderRows();
  els.refIntel.innerHTML = `<dl><dt>Reference</dt><dd>${current.reference}</dd><dt>Mapping state</dt><dd>${current.mapping}</dd><dt>Guidance</dt><dd>${current.referenceIntel}</dd></dl>`;
  els.serialIntel.innerHTML = `<dl><dt>Entered serial</dt><dd>${els.serial.value || "Not entered"}</dd><dt>Guidance</dt><dd>${current.serial}</dd></dl>`;
  els.provenance.innerHTML = `<dl><dt>Evidence status</dt><dd>${current.provenance}</dd><dt>Prototype warning</dt><dd>Test data only — not suitable as an authentication authority.</dd></dl>`;
}

function renderRows(){
  if(!current.expected.length){
    els.rows.innerHTML = `<div class="no-conflicts" style="border-color:#725c26;background:#211a0d;color:#e8c879">No expected configuration is loaded. Research is required before automated comparison can begin.</div>`;
    renderAssessment();
    return;
  }

  els.rows.innerHTML = current.expected.map((item,i)=>{
    const value = observed[item.key] ?? "";
    const status = statusFor(item,value);
    return `<div class="comparison-row">
      <div class="check-name">${item.label}</div>
      <div class="expected">${item.value}</div>
      <div class="observed-control"><input data-key="${item.key}" data-index="${i}" value="${escapeHtml(value)}" placeholder="Record observation" /></div>
      <span class="status ${status.cls}">${status.label}</span>
    </div>`;
  }).join("");

  els.rows.querySelectorAll("input").forEach(input=>{
    input.addEventListener("input",e=>{
      observed[e.target.dataset.key]=e.target.value;
      renderRows();
    });
  });
  renderAssessment();
}

function statusFor(item,value){
  if(!String(value).trim()) return {cls:"pending",label:"PENDING"};
  const a=norm(value), b=norm(item.value);
  const variantDependent = b.includes("VARIANT-DEPENDENT") || b.includes("FAMILY");
  if(variantDependent) return {cls:"pending",label:"REVIEW"};
  const tokens = b.replace(/[^A-Z0-9 ]/g," ").split(/\s+/).filter(x=>x.length>2);
  const hit = tokens.some(t=>a.includes(t)) || a===b;
  return hit ? {cls:"match",label:"MATCH"} : {cls:"conflict",label:"CONFLICT"};
}

function renderAssessment(){
  const expected = current.expected || [];
  const completed = expected.filter(x=>String(observed[x.key]||"").trim()).length;
  const conflicts = expected.filter(x=>statusFor(x,observed[x.key]||"").cls==="conflict");
  const matches = expected.filter(x=>statusFor(x,observed[x.key]||"").cls==="match");
  els.progress.textContent = expected.length ? `${completed} / ${expected.length} checks recorded` : "Research required";

  if(conflicts.length){
    els.discrepancies.innerHTML = conflicts.map(x=>`<div class="discrepancy"><strong>${x.label}: expected ${x.value}</strong><p>Observed: ${escapeHtml(observed[x.key])}. Significance: ${x.severity.toUpperCase()}. ${x.hint}</p></div>`).join("");
  } else if(expected.length){
    els.discrepancies.innerHTML = `<div class="no-conflicts">${completed===expected.length ? "No configuration conflicts detected in the recorded checks." : "No conflicts yet. Complete the remaining observations before relying on this assessment."}</div>`;
  } else {
    els.discrepancies.innerHTML = `<div class="discrepancy"><strong>No reference profile</strong><p>The system cannot compare this watch until a supported expected configuration has been researched.</p></div>`;
  }

  const rows = [
    ["Reference", current.mapping==="UNKNOWN" ? "Research" : "Loaded", current.mapping==="UNKNOWN"?"warn":"good"],
    ["Observed checks", `${completed}/${expected.length}`, completed===expected.length && expected.length ? "good":"warn"],
    ["Conflicts", String(conflicts.length), conflicts.length ? "bad":"good"],
    ["Safety", current.safety.level==="stop" ? "STOP" : current.safety.level==="caution" ? "Review" : "Clear", current.safety.level==="stop"?"bad":current.safety.level==="caution"?"warn":"good"]
  ];
  els.matrix.innerHTML = rows.map(r=>`<div class="matrix-row"><span>${r[0]}</span><span class="matrix-mark ${r[2]}">${r[1]}</span></div>`).join("");

  let title, copy;
  if(current.safety.level==="stop"){
    title="Bench workflow stopped";
    copy="Do not continue normal opening or internal inspection. Resolve the special-construction handling requirement first.";
  } else if(current.mapping==="UNKNOWN"){
    title="Insufficient reference intelligence";
    copy="Do not infer authenticity. Research the exact reference and attach evidence before using automated comparison.";
  } else if(conflicts.length){
    title="Configuration conflicts require investigation";
    copy="The app is surfacing mismatches, not declaring the watch counterfeit. Re-check entry, component identification, service history and reference mapping.";
  } else if(completed===expected.length && expected.length){
    title="No database conflicts identified";
    copy="This supports the bench assessment but is not an authenticity verdict. The authenticator remains responsible for the final decision.";
  } else {
    title="Assessment incomplete";
    copy="Record the physical observations required for this specific watch.";
  }
  els.assessment.innerHTML = `<strong>${title}</strong><p>${copy}</p>`;

  const actions = [];
  if(current.safety.level==="stop"){
    actions.push(["Stop opening workflow","Follow verified specialist/manufacturer handling instructions."]);
  } else {
    conflicts.forEach(x=>actions.push([`Re-check ${x.label}`,x.hint]));
    expected.filter(x=>!String(observed[x.key]||"").trim()).slice(0,3).forEach(x=>actions.push([`Inspect ${x.label}`,x.hint]));
  }
  if(!expected.length) actions.push(["Create research task","Resolve exact reference mapping, safety status and authentication-critical fields."]);
  if(!actions.length) actions.push(["Review evidence","Open provenance and confirm the quality of the supporting reference intelligence."]);
  els.actions.innerHTML = actions.slice(0,3).map(a=>`<div class="bench-action"><b>${a[0]}</b><span>${a[1]}</span></div>`).join("");
  generateFinalNote();
}

function generateFinalNote(){
  if(!current || !els.finalNote) return;
  const expected = current.expected || [];
  const completed = expected.filter(x=>String(observed[x.key]||"").trim());
  const conflicts = completed.filter(x=>statusFor(x,observed[x.key]).cls==="conflict");
  const matches = completed.filter(x=>statusFor(x,observed[x.key]).cls==="match");
  const review = completed.filter(x=>statusFor(x,observed[x.key]).cls==="pending");

  const identity = [current.brand, current.model, current.reference ? `Ref. ${current.reference}` : ""].filter(Boolean).join(" — ");
  const lines = [identity];

  if(els.serial.value.trim()) lines.push(`Serial: ${els.serial.value.trim()}`);

  if(current.safety.level==="stop"){
    lines.push("Special construction identified. Normal case-opening workflow not carried out.");
  }

  if(matches.length){
    lines.push(`Checks consistent with expected configuration: ${matches.map(x=>x.label).join(", ")}.`);
  }

  if(conflicts.length){
    lines.push("Discrepancies requiring review: " + conflicts.map(x=>`${x.label} observed as ${String(observed[x.key]).trim()} (expected ${x.value})`).join("; ") + ".");
  }

  if(review.length){
    lines.push(`Items requiring manual review: ${review.map(x=>x.label).join(", ")}.`);
  }

  if(!expected.length){
    lines.push("Exact reference profile not available in the current database; manual research required.");
  } else if(completed.length < expected.length){
    lines.push(`Assessment incomplete: ${completed.length} of ${expected.length} configured checks recorded.`);
  } else if(!conflicts.length && completed.length===expected.length){
    lines.push("No configuration conflicts identified in the completed database checks.");
  }

  els.finalNote.value = lines.join("\n");
  els.copyNoteStatus.textContent = "";
}

async function copyFinalNote(){
  const text = els.finalNote.value.trim();
  if(!text){
    els.copyNoteStatus.textContent = "Nothing to copy.";
    return;
  }
  try{
    await navigator.clipboard.writeText(text);
    els.copyNoteStatus.textContent = "Copied to clipboard.";
  }catch(err){
    els.finalNote.focus();
    els.finalNote.select();
    const ok = document.execCommand("copy");
    els.copyNoteStatus.textContent = ok ? "Copied to clipboard." : "Select the note and copy it manually.";
  }
}

function escapeHtml(str){
  return String(str).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#039;"}[c]));
}

els.generateNote.addEventListener("click",generateFinalNote);
els.copyNote.addEventListener("click",copyFinalNote);
els.finalNote.addEventListener("input",()=>{ els.copyNoteStatus.textContent=""; });
els.serial.addEventListener("input",()=>{ if(current) generateFinalNote(); });
els.load.addEventListener("click",loadWatch);
els.ref.addEventListener("keydown",e=>{if(e.key==="Enter")loadWatch();});
els.reset.addEventListener("click",()=>{
  els.brand.value=""; els.ref.value=""; els.serial.value=""; els.workflow.value="Authentication";
  els.workspace.classList.add("hidden"); els.empty.classList.remove("hidden"); current=null; observed={};
});
document.querySelectorAll("[data-sample]").forEach(btn=>btn.addEventListener("click",()=>{
  const [brand,ref]=btn.dataset.sample.split("|"); els.brand.value=brand; els.ref.value=ref; loadWatch();
}));