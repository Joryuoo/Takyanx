import qrCode from '../assets/img/qr-code.webp'
import { QR_TARGET } from '../config'

// The QR code is the team's own artwork (it encodes the shared Drive folder). It is a fixed
// image, so if the Drive link in config.js ever changes, this image has to be replaced too.
export default function QrSection() {
  return (
    <section className="section" id="scan">
      <article className="panel">
        <header className="panel__head">
          <h2>Scan to play</h2>
        </header>
        <div className="panel__body qr">
          <div className="qr__code">
            <img
              src={qrCode}
              width="260"
              height="260"
              alt="QR code that opens the Takyan X download folder on Google Drive"
            />
          </div>
          <div className="qr__text">
            <p>Point your phone camera at the code to open the download folder.</p>
            <ol className="steps">
              <li>Scan the code and open the Drive link.</li>
              <li>Download and install the APK.</li>
              <li>Play solo, or host or join a room.</li>
            </ol>
            <a
              className="btn btn--play"
              href={QR_TARGET}
              target="_blank"
              rel="noreferrer"
            >
              Open download link
            </a>
          </div>
        </div>
      </article>
    </section>
  )
}
