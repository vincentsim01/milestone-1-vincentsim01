function toggleSegment(segmentId) {
    const segment = document.getElementById(`${segmentId}-content`);
    segment.classList.toggle("expanded");
  }