import './App.css'

function App() {
  const resultCards = [
    {
      carrier: 'ANA',
      route: 'LAX -> HND',
      depart: 'Dec 7, 2026',
      returnDate: 'Dec 19, 2026',
      duration: '11h 55m + 10h 25m',
      stops: 'Nonstop',
      price: '$982',
      source: 'Partner API A',
    },
    {
      carrier: 'Japan Airlines',
      route: 'LAX -> NRT',
      depart: 'Dec 10, 2026',
      returnDate: 'Dec 22, 2026',
      duration: '12h 20m + 10h 40m',
      stops: 'Nonstop',
      price: '$1,045',
      source: 'Partner API B',
    },
    {
      carrier: 'United',
      route: 'LAX -> HND',
      depart: 'Dec 12, 2026',
      returnDate: 'Dec 27, 2026',
      duration: '14h 10m + 12h 05m',
      stops: '1 stop',
      price: '$914',
      source: 'Partner API A',
    },
  ]

  const watchSteps = [
    {
      title: 'Define your Dec 2026 dates',
      copy: 'Pick a specific window or use a flexible range inside December.',
    },
    {
      title: 'Set an alert threshold',
      copy: 'Choose a target fare and a cooldown to avoid alert spam.',
    },
    {
      title: 'Track history + get notified',
      copy: 'We snapshot prices daily and send you an email when it drops.',
    },
  ]

  const alerts = [
    {
      time: '2 hours ago',
      title: 'Price drop detected',
      detail: 'LAX -> HND fell to $914 on Dec 12-27 window.',
    },
    {
      time: 'Yesterday',
      title: 'New low for Dec 7-19',
      detail: 'ANA nonstop is now $982, down $56 from last week.',
    },
    {
      time: '3 days ago',
      title: 'Watch created',
      detail: 'Daily refresh scheduled at 08:00 PT.',
    },
  ]

  return (
    <div className="app">
      <header className="top-bar">
        <div className="brand">
          <span className="brand-mark" aria-hidden="true">
            JT
          </span>
          <div>
            <p className="brand-name">Japan Airfare Tracker</p>
            <p className="brand-subtitle">LAX {'->'} Tokyo | December 2026</p>
          </div>
        </div>
        <nav className="nav">
          <a href="#search">Search</a>
          <a href="#watches">Watches</a>
          <a href="#history">History</a>
          <a href="#sources">Sources</a>
        </nav>
        <button className="cta ghost">Sign in</button>
      </header>

      <section className="hero reveal">
        <div className="hero-copy">
          <p className="eyebrow">Track price drops without the busywork</p>
          <h1>Monitor LAX to Tokyo fares for December 2026</h1>
          <p className="lede">
            Set a watch once. We refresh fares from approved partners, store
            price history, and send an email when the price hits your target.
          </p>
          <div className="hero-actions">
            <button className="cta">Create a watch</button>
            <button className="cta ghost">View live fares</button>
          </div>
          <div className="hero-stats">
            <div>
              <p className="stat">98.6%</p>
              <p className="stat-label">refresh success</p>
            </div>
            <div>
              <p className="stat">4.2s</p>
              <p className="stat-label">median result time</p>
            </div>
            <div>
              <p className="stat">99.4%</p>
              <p className="stat-label">alert delivery</p>
            </div>
          </div>
        </div>
        <div className="hero-panel">
          <div className="panel-card">
            <h2>Quick search</h2>
            <p className="panel-subtitle">
              Fixed route for MVP. Adjust December dates and preferences.
            </p>
            <div className="form-grid" id="search">
              <label>
                Origin
                <input value="LAX" readOnly />
              </label>
              <label>
                Destination
                <input value="Tokyo (HND + NRT)" readOnly />
              </label>
              <label>
                Depart
                <input value="Dec 5 - Dec 15" readOnly />
              </label>
              <label>
                Return
                <input value="Dec 18 - Dec 29" readOnly />
              </label>
              <label>
                Cabin
                <input value="Economy" readOnly />
              </label>
              <label>
                Passengers
                <input value="1 Adult" readOnly />
              </label>
            </div>
            <button className="cta full">Search fares</button>
            <p className="helper">
              Results are indicative and may change on the provider site.
            </p>
          </div>
        </div>
      </section>

      <section className="results reveal" aria-labelledby="results-title">
        <div className="section-title">
          <p className="eyebrow">Current fares snapshot</p>
          <h2 id="results-title">December 2026 sample itineraries</h2>
        </div>
        <div className="results-grid">
          {resultCards.map((card) => (
            <article className="result-card" key={card.carrier + card.depart}>
              <div className="result-head">
                <div>
                  <p className="carrier">{card.carrier}</p>
                  <p className="route">{card.route}</p>
                </div>
                <span className="price">{card.price}</span>
              </div>
              <div className="result-details">
                <div>
                  <p className="detail-label">Dates</p>
                  <p>
                    {card.depart} {'->'} {card.returnDate}
                  </p>
                </div>
                <div>
                  <p className="detail-label">Duration</p>
                  <p>{card.duration}</p>
                </div>
                <div>
                  <p className="detail-label">Stops</p>
                  <p>{card.stops}</p>
                </div>
                <div>
                  <p className="detail-label">Source</p>
                  <p>{card.source}</p>
                </div>
              </div>
              <button className="cta ghost">Open booking link</button>
            </article>
          ))}
        </div>
      </section>

      <section className="watches reveal" id="watches">
        <div className="section-title">
          <p className="eyebrow">Fare watch workflow</p>
          <h2>Configure alerts once, get updates all month</h2>
        </div>
        <div className="watch-layout">
          <div className="watch-steps">
            {watchSteps.map((step) => (
              <div className="step" key={step.title}>
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
              </div>
            ))}
          </div>
          <div className="watch-form">
            <h3>Create a watch</h3>
            <div className="form-stack">
              <label>
                Target price
                <input value="$950" readOnly />
              </label>
              <label>
                Refresh cadence
                <input value="Daily at 08:00 PT" readOnly />
              </label>
              <label>
                Alert cooldown
                <input value="48 hours" readOnly />
              </label>
              <label>
                Notification email
                <input value="you@example.com" readOnly />
              </label>
            </div>
            <button className="cta full">Save watch</button>
            <p className="helper">Email alerts are logged for auditability.</p>
          </div>
        </div>
      </section>

      <section className="history reveal" id="history">
        <div className="section-title">
          <p className="eyebrow">Price history</p>
          <h2>Daily snapshots with clear trend direction</h2>
        </div>
        <div className="history-grid">
          <div className="history-chart">
            <div className="chart-header">
              <div>
                <p className="chart-title">LAX {'->'} HND, Dec 12-27</p>
                <p className="chart-subtitle">30-day rolling history</p>
              </div>
              <span className="delta">-8.4% last 14 days</span>
            </div>
            <div className="chart" aria-hidden="true">
              <span className="bar bar-1" />
              <span className="bar bar-2" />
              <span className="bar bar-3" />
              <span className="bar bar-4" />
              <span className="bar bar-5" />
              <span className="bar bar-6" />
              <span className="bar bar-7" />
              <span className="bar bar-8" />
              <span className="bar bar-9" />
              <span className="bar bar-10" />
              <span className="bar bar-11" />
              <span className="bar bar-12" />
            </div>
            <p className="helper">
              Source attribution and timestamps stored per snapshot.
            </p>
          </div>
          <div className="alert-feed">
            <h3>Recent alerts</h3>
            <div className="feed">
              {alerts.map((alert) => (
                <div className="feed-item" key={alert.title}>
                  <p className="feed-time">{alert.time}</p>
                  <p className="feed-title">{alert.title}</p>
                  <p className="feed-detail">{alert.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="sources reveal" id="sources">
        <div className="section-title">
          <p className="eyebrow">Data sources + operations</p>
          <h2>Approved integrations with clear compliance status</h2>
        </div>
        <div className="source-grid">
          <div className="source-card">
            <h3>Partner API A</h3>
            <p>Daily refresh, caching window 24 hours.</p>
            <span className="badge good">Healthy</span>
          </div>
          <div className="source-card">
            <h3>Partner API B</h3>
            <p>Hourly refresh, requires attribution in UI.</p>
            <span className="badge good">Healthy</span>
          </div>
          <div className="source-card">
            <h3>Partner API C</h3>
            <p>Pending legal review for Dec 2026 route coverage.</p>
            <span className="badge warn">Needs review</span>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>Japan Airfare Tracker MVP for LAX {'->'} Tokyo (Dec 2026).</p>
        <p>Prices are indicative. Bookings finalize on the provider site.</p>
      </footer>
    </div>
  )
}

export default App
