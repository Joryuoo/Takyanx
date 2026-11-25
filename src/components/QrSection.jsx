import { QRCodeSVG } from 'qrcode.react'
import { QR_TARGET } from '../config'

export default function QrSection() {
  return (
    <section className="section" id="scan">
      <article className="panel">
        <header className="panel__head">
          <h2>Scan to play</h2>
        </header>
        <div className="panel__body qr">
          <div className="qr__code">
            {/* White background + quiet zone keeps the code scannable. */}
            <QRCodeSVG
              value={QR_TARGET}
              size={240}
              level="M"
              marginSize={4}
              bgColor="#ffffff"
              fgColor="#3a2216"
              title="QR code to download Takyan X for Android"
            />
          </div>
          <div className="qr__text">
            <p>
              Point your phone camera at the code to open the download for
              Android.
            </p>
            <ol className="steps">
              <li>Scan the code and open the Drive link.</li>
              <li>Install the APK (allow unknown apps if asked).</li>
              <li>Join a friend's room on the same Wi-Fi and kick off.</li>
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
