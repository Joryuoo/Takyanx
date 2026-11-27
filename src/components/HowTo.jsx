// Menu names and the order of the screens follow the game: Main menu > Play > Mode (Solo /
// Multiplayer) > Create or Join > Create Room (One vs One or Rambol, room code, Play).
export default function HowTo() {
  return (
    <section className="section" id="how-to">
      <h2 className="section__title">Getting started</h2>
      <div className="cards howto">
        <article className="panel panel--narrow panel--howdl">
          <header className="panel__head">
            <h3>How to download</h3>
          </header>
          <div className="panel__body">
            <ol className="howto__steps">
              <li>Scan the QR code, or pick your device in Download above.</li>
              <li>
                <strong>Android:</strong> download <strong>TakyanX.apk</strong> and open it to install.
              </li>
              <li>
                <strong>PC:</strong> download <strong>TakyanX.exe</strong> and run it.
              </li>
            </ol>
          </div>
        </article>

        <article className="panel panel--narrow panel--howplay">
          <header className="panel__head">
            <h3>How to play with friends</h3>
          </header>
          <div className="panel__body">
            <p className="howto__badge">Currently local multiplayer (LAN): everyone plays on the same network.</p>
            <ol className="howto__steps">
              <li>Everyone installs the game and joins the same network.</li>
              <li>
                One player picks <strong>Play</strong>, <strong>Multiplayer</strong>, then <strong>Create</strong>,
                chooses 1v1 or Rambol and shares the room code.
              </li>
              <li>
                Everyone else picks <strong>Multiplayer</strong>, then <strong>Join</strong>, and chooses the room
                from the list or types the room code and presses <strong>Play</strong>.
              </li>
              <li>
                The host presses <strong>Play</strong> once everyone is in.
              </li>
            </ol>
            <p className="howto__tip">
              <strong>Not in the same place?</strong> Friends in different places can still play together: join the
              same virtual network with a VPN app like <strong>Radmin VPN</strong> or <strong>ZeroTier</strong>, then
              follow the steps above.
            </p>
          </div>
        </article>
      </div>
    </section>
  )
}
