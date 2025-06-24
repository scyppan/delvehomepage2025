function buildsection() {
    const slider = document.createElement('section');
    slider.id = 'slider';
    slider.className = 'slider';

    const content = document.getElementById('content');
    if (!content || !content.parentNode) return;
    content.parentNode.insertBefore(slider, content);
}