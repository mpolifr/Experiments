function startExperiment() {
  document.getElementById('experiment').innerHTML = `
    <h3>🔬 Experiment: Observing cells / Observando células</h3>
    <ol>
      <li>Prepare onion skin and cheek cell slides.</li>
      <li>Use 10× and 40× magnification to observe structures.</li>
      <li>Draw and describe nucleus, membrane, cytoplasm, and wall.</li>
    </ol>
    <textarea id="expNotes" rows="6" placeholder="Write your notes / Escribe tus observaciones..."></textarea>
    <button onclick="submitExperiment()">Submit Observations / Enviar observaciones</button>
    <div id="expResult"></div>
  `;
}

function submitExperiment() {
  const notes = document.getElementById('expNotes').value.trim();
  const res = document.getElementById('expResult');
  if (notes.length < 20) {
    res.textContent = 'Please provide a more detailed observation / Observación muy breve.';
    res.style.color = 'red';
  } else {
    res.textContent = '✅ Well done! Your observation was recorded / Observación registrada con éxito.';
    res.style.color = 'green';
  }
}