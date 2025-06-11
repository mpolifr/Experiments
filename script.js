function startExperiment() {
  document.getElementById('experiment').innerHTML = `
    <h3>🔬 Observing Cells</h3>
    <ol>
      <li>🧅 Prepare a slide of onion skin and cheek cells.</li>
      <li>🔍 Use 10× and 40× magnification to observe details.</li>
      <li>🧠 Identify nucleus, membrane, cytoplasm, and cell wall.</li>
    </ol>
    <textarea id="expNotes" rows="6" placeholder="Write your notes / Escribe tus observaciones..."></textarea>
    <button onclick="submitExperiment()">📤 Submit Observations</button>
    <div id="expResult"></div>
  `;
}

function submitExperiment() {
  const notes = document.getElementById('expNotes').value.trim();
  const res = document.getElementById('expResult');
  if (notes.length < 20) {
    res.textContent = '⚠️ Too short. Please describe your observation in detail.';
    res.style.color = 'red';
  } else {
    res.textContent = '✅ Great job! Observation saved.';
    res.style.color = 'green';
  }
}