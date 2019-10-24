function getCursorPosition(canvas, event) {
  const rect = canvas.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  return {x, y};
}

const canvas = document.getElementById("editor-canvas");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const histCanvas = document.getElementById("hist-canvas");

const loadImageFromFile = () => {
  const ctx = canvas.getContext("2d");
  const img = document.getElementById("pic");
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
};

const initEditor = () => {
  const editor = new Editor({ canvas, histCanvas });

  const erosionOperation = new Operation({
    button: document.getElementById(('erosion-button')),
    method: erosion,
    editor,
  });

  const dilationOperation = new Operation({
    button: document.getElementById(('dilation-button')),
    method: dilation,
    editor,
  });

  const openingOperation = new Operation({
    button: document.getElementById(('opening-button')),
    method: opening,
    editor,
  });

  const closingOperation = new Operation({
    button: document.getElementById(('closing-button')),
    method: closing,
    editor,
  });

  const perspectiveTransformOperation = new PickPointsOperation({
    button: document.getElementById('perspective-transform-button'),
    method: perspectiveTransform,
    number: 4,
    editor
  });

  const biliniarTransformOperation = new PickPointsOperation({
    button: document.getElementById('bilinear-transform-button'),
    method: bilinearTransform,
    number: 4,
    editor,
  });

  const medianBlurOperation = new Operation({
    button: document.getElementById(('median-blur-button')),
    method: medianBlur,
    editor,
  });

  const greyImageOperation = new Operation({
    button: document.getElementById(('grey-image-button')),
    method: grayImage,
    editor,
  });

  const normilizeOperation = new Operation({
    button: document.getElementById(('normilize-button')),
    method: normilize,
    editor,
  });

  const equalizeOperation = new Operation({
    button: document.getElementById(('equalize-button')),
    method: equalize,
    editor,
  });

  const findBallsOperation = new Operation({
    button: document.getElementById(('find-balls-button')),
    method: findBalls,
    editor,
  });

  const cannyOperation = new Operation({
    button: document.getElementById(('canny-button')),
    method: canny,
    editor,
  });

  const sobelOperation = new Operation({
    button: document.getElementById(('sobel-button')),
    method: sobel,
    editor,
  });

  const findContoursOperation = new Operation({
    button: document.getElementById(('find-contours-button')),
    method: findContors,
    editor,
  });

  const strangeFormulaOperation = new Operation({
    button: document.getElementById(('strange-formula-button')),
    method: strangeFormula,
    editor,
  });

  document.getElementById(('blur-video-button'))
    .addEventListener('click', () => blurVideo(canvas, 11));


  document.addEventListener("keydown", event => {
    if (event.isComposing || event.code === "ArrowLeft") {
      editor.undo();
    } else if(event.isComposing || event.code === "ArrowRight") {
      editor.redo()
    }
  });

  const tabs = new Tabs()
};

loadImageFromFile();

// old_opencv.js
initEditor();

// opencv.js
// cv.onRuntimeInitialized = () => initEditor();

// const opencvIsReady = () => initEditor();
