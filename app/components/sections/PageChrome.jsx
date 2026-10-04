export default function PageChrome() {
  return (
    <>
      <div className="preloader" aria-hidden="true">
        <div className="preloader-mark">
          <img
            src="/assets/avelith-mark-transparent.png"
            alt=""
            aria-hidden="true"
          />
        </div>
        <div className="preloader-line">
          <span></span>
        </div>
        <div className="preloader-count">00</div>
      </div>

      <div className="grain" aria-hidden="true"></div>
      <div className="scroll-progress" aria-hidden="true">
        <span></span>
      </div>
    </>
  );
}
