import { QRCodeSVG } from 'qrcode.react'
import { QR_TARGET } from '../config'

export default function QrSection() {
  return (
    <section className="section qr" id="scan">
      <div className="qr__card">
        <div className="qr__code">
          {/* Light background + quiet zone keeps the code scannable on dark pages. */}
          <QRCodeSVG
            value={QR_TARGET}
            size={240}
            level="M"
            marginSize={4}
            bgColor="#ffffff"
            fgColor="#0b1230"
            title="QR code to download Takyan X for Android"
          />
        </div>
        <div className="qr__text">
          <h2>Scan to play</h2>
          <p>
            Point your phone camera at the code to download Takyan X for
            Android. Already on your phone? Use the button below.
          </p>
          <ol className="steps">
            <li>Scan the code and open the link.</li>
            <li>Install the APK (allow unknown apps if asked).</li>
            <li>Join a friend's room on the same Wi-Fi and kick off.</li>
          </ol>
          <a className="btn btn--primary" href={QR_TARGET}>
            Download APK
          </a>
        </div>
      </div>
    </section>
  )
}
