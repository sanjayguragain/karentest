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
      badge: 'Best value',
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
      badge: 'Nonstop',
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
      badge: 'Flexible',
    },
  ]

  const watchSteps = [
    {
      title: 'Pick a December window',
      copy: 'Select date ranges and any flexibility inside December 2026.',
    },
    {
      title: 'Set your target price',
      copy: 'Choose a threshold and cooldown to avoid repeated alerts.',
    },
    {
      title: 'Get notified fast',
      copy: 'We email you when the fare drops and log every alert event.',
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

  const filterChips = ['Nonstop', '1 stop', 'Morning', 'Evening', 'Best value']

  return (
    <div className="page">
      <header className="header">
        <div className="logo">
          <span className="logo-badge" aria-hidden="true">
            JT
          </span>
          <div>
            <p className="logo-title">Japan Airfare Tracker</p>
            <p className="logo-subtitle">LAX {'->'} Tokyo | Dec 2026</p>
          </div>
        </div>
        <nav className="nav">
          <a href="#search">Flights</a>
          <a href="#results">Deals</a>
          <a href="#tracker">Price Tracker</a>
          <a href="#sources">Sources</a>
        </nav>
        <div className="header-actions">
          <button className="btn ghost">Sign in</button>
          <button className="btn primary">Create watch</button>
        </div>
      </header>

      <section className="hero" id="search">
        <div className="hero-copy">
          <p className="eyebrow">Deals for December 2026</p>
          <h1>Find and track LAX to Tokyo fares in one place</h1>
          <p className="lede">
            Search approved partner fares, compare itineraries, and set alerts
            when the price drops below your target.
          </p>
          <div className="hero-meta">
            <div>
              <p className="stat">98.6%</p>
              <p className="stat-label">daily refresh success</p>
            </div>
            <div>
              <p className="stat">4.2s</p>
              <p className="stat-label">median search time</p>
            </div>
            <div>
              <p className="stat">99.4%</p>
              <p className="stat-label">alert delivery</p>
            </div>
          </div>
        </div>
        <div className="search-card">
          <div className="tabs">
            <button className="tab active">Flights</button>
            <button className="tab" disabled>
              Hotels
            </button>
            <button className="tab" disabled>
              Cars
            </button>
            <button className="tab" disabled>
              Packages
            </button>
          </div>
          <div className="field-row">
            <label>
              From
              <input value="LAX" readOnly />
            </label>
            <label>
              To
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
              Travelers
              <input value="1 Adult" readOnly />
            </label>
            <label>
              Cabin
              <input value="Economy" readOnly />
            </label>
          </div>
          <button className="btn primary full">Search fares</button>
          <p className="helper">Prices may change on the provider site.</p>
        </div>
      </section>

      <section className="deals" aria-label="Quick deals">
        <div className="deal-card">
          <p className="deal-label">Lowest nonstop</p>
          <p className="deal-route">LAX {'->'} HND</p>
          <p className="deal-price">$982</p>
          <span className="pill">Dec 7-19</span>
        </div>
        <div className="deal-card">
          <p className="deal-label">Fastest round trip</p>
          <p className="deal-route">LAX {'->'} NRT</p>
          <p className="deal-price">$1,045</p>
          <span className="pill">Dec 10-22</span>
        </div>
        <div className="deal-card">
          <p className="deal-label">Flexible dates</p>
          <p className="deal-route">LAX {'->'} HND</p>
          <p className="deal-price">$914</p>
          <span className="pill">Dec 12-27</span>
        </div>
      </section>

      <section className="results" id="results" aria-labelledby="results-title">
        <div className="section-head">
          <div>
            <p className="eyebrow">December 2026 fares</p>
            <h2 id="results-title">Top itineraries from approved partners</h2>
          </div>
          <div className="sort">
            <span>Sort by</span>
            <button className="btn ghost">Best value</button>
          </div>
        </div>
        <div className="results-layout">
          <aside className="filters">
            <h3>Filters</h3>
            <div className="filter-group">
              {filterChips.map((chip) => (
                <button className="chip" key={chip}>
                  {chip}
                </button>
              ))}
            </div>
            <div className="filter-card">
              <p className="filter-label">Price target</p>
              <div className="range-bar">
                <span className="range-indicator" />
              </div>
              <p className="filter-caption">Goal: $950</p>
            </div>
            <div className="filter-card">
              <p className="filter-label">Partner coverage</p>
              <p className="filter-caption">2 sources active, 1 in review.</p>
            </div>
          </aside>
          <div className="result-list">
            {resultCards.map((card) => (
              <article className="result-item" key={card.carrier + card.depart}>
                <div>
                  <p className="carrier">{card.carrier}</p>
                  <p className="route">{card.route}</p>
                  <div className="meta">
                    <span>{card.depart}</span>
                    <span>{card.returnDate}</span>
                  </div>
                </div>
                <div>
                  <p className="detail">{card.duration}</p>
                  <p className="detail">{card.stops}</p>
                  <p className="detail">{card.source}</p>
                </div>
                <div className="price-col">
                  <span className="tag">{card.badge}</span>
                  <p className="price">{card.price}</p>
                  <button className="btn ghost">View deal</button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="tracker" id="tracker">
        <div className="tracker-info">
          <p className="eyebrow">Price tracker</p>
          <h2>Alert-ready watches for December 2026</h2>
          <div className="step-list">
            {watchSteps.map((step) => (
              <div className="step" key={step.title}>
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="tracker-panels">
          <div className="tracker-card">
            <h3>Watch configuration</h3>
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
            <button className="btn primary full">Save watch</button>
            <p className="helper">Alerts are logged for auditability.</p>
          </div>
          <div className="tracker-card">
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

      <section className="sources" id="sources">
        <div className="section-head">
          <div>
            <p className="eyebrow">Data sources + ops</p>
            <h2>Approved integrations with compliance tracking</h2>
          </div>
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
            <p>Pending legal review for Dec 2026 coverage.</p>
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
