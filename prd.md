# Product Requirements Document (PRD)

## Document Information & Revision History

- **Product / Project Name:** Japan Airfare Tracker
- **Subtitle:** Web app to track LAX → Tokyo airfares for December 2026
- **Document Version:** v0.1 (Draft)
- **Date:** 2026-03-04
- **Author / Owner:** TBD (Product Owner)
- **Status:** Draft
- **Approvals / Sign-offs:** TBD (Product, Engineering, Legal/Compliance for data-source terms, Security/Privacy if user accounts/PII are stored)

### Revision History

| Version | Date | Author | Summary of Changes |
| --- | --- | --- | --- |
| v0.1 | 2026-03-04 | TBD | Initial PRD draft from user request; scoped to LAX→Tokyo, Dec 2026; added baseline scenarios, requirements (FR/NFR/SEC/DG), architecture overview, and open questions. |

## Executive Summary

### Problem / Opportunity

- Tracking airfare prices for a future trip (December 2026) requires repeated manual checking across multiple travel sites; this is time-consuming and makes it hard to know when to buy.
- Prices fluctuate frequently; users want visibility into price history and timely alerts when prices drop.

### Target Users

- Primary: Individual travelers planning a trip from Los Angeles (LAX) to Tokyo in December 2026.
- Secondary (future): Travelers monitoring multiple routes/months or multiple passengers.

### Proposed Solution

- A web application that enables users to:
  - Configure a flight search for LAX → Tokyo for a December 2026 date range.
  - Pull flight options and prices from configured, popular travel data sources (via approved APIs/partnerships).
  - Store price quotes over time to show trends and detect price drops.
  - Notify users (MVP: email) when configured price conditions are met.
- System-of-record boundaries:
  - Third-party travel data sources remain system of record for prices/availability.
  - The application stores user search criteria, price history snapshots, and notification logs.

### Leading Indicators (first 30–90 days post-launch)

| Indicator | Baseline | Target | Measurement Window | Data Source | Owner |
| --- | ---: | ---: | --- | --- | --- |
| Users who create at least one watch | TBD | TBD | 30/60/90 days | App analytics + DB | Product |
| Daily fare refresh success rate | TBD | ≥ 98% | 30/60/90 days | Worker logs + DB | Engineering |
| Alert delivery success rate | TBD | ≥ 99% | 30/60/90 days | Email provider logs | Engineering |
| Median “time to first useful result” (search → results) | TBD | ≤ 5s | 30/60/90 days | Web analytics | Engineering |

### Success Metrics (Outcomes / KPIs)

| Outcome KPI | Baseline | Target | Timeframe | Data Source | Owner |
| --- | ---: | ---: | --- | --- | --- |
| Manual checking reduced for users (self-reported) | TBD | TBD | 60–90 days | In-app survey (TBD) | Product |
| Price-drop alerts that users consider actionable (self-reported) | TBD | TBD | 60–90 days | In-app survey (TBD) | Product |
| Data-source compliance incidents | 0 | 0 | Ongoing | Incident log | Product/Legal |

### Scope Summary

- In scope (MVP): LAX → Tokyo searches for December 2026; pulling fares from configured sources; price history; watch creation; email alerts; deep-links to booking sources.
- Not included (MVP): booking/purchase flows; payment processing; loyalty points optimization; routes beyond LAX → Tokyo; months beyond Dec 2026; SMS/push alerts (unless explicitly required).

## Project Background & Overview

### Background / Problem Statement

- Users need an easy way to monitor airfares over time for a specific future trip window.
- Aggregating multiple travel sites’ results and keeping a price history enables better decision-making than ad-hoc searches.

### Project Overview

- Japan Airfare Tracker is a web app that continuously retrieves flight options/prices for LAX → Tokyo during December 2026, stores price snapshots, and notifies users about meaningful price changes.

### Strategic Alignment

- Personal productivity and travel-planning efficiency; reduce repetitive manual monitoring.

## Objectives & Success Metrics

### Objective 1 — Provide a reliable view of current fares for LAX → Tokyo in Dec 2026

- **Success Metric:** Median search-to-results time ≤ 5s with ≥ 98% successful refresh jobs.
- **Baseline:** TBD.
- **Metric Instrumentation Plan**
  - **Data source:** API response timings, worker job logs, web analytics.
  - **Owner:** Engineering.
  - **Cadence:** Daily dashboards; weekly review.

### Objective 2 — Help users monitor fares over time with price history

- **Success Metric:** Users can view at least 30 days of price history per watch (if the watch exists that long).
- **Baseline:** TBD.
- **Metric Instrumentation Plan**
  - **Data source:** DB records of fare snapshots; page-view events for history view.
  - **Owner:** Product + Engineering.
  - **Cadence:** Weekly.

### Objective 3 — Notify users when fares meet configured conditions

- **Success Metric:** Alert delivery success rate ≥ 99% and duplicate-alert rate ≤ TBD.
- **Baseline:** TBD.
- **Metric Instrumentation Plan**
  - **Data source:** Notification logs; email provider delivery events.
  - **Owner:** Engineering.
  - **Cadence:** Daily monitoring.

### Objective 4 — Operate within data-source terms and legal constraints

- **Success Metric:** 0 data-source compliance incidents.
- **Baseline:** 0.
- **Metric Instrumentation Plan**
  - **Data source:** Compliance checklist (TBD), incident tickets.
  - **Owner:** Product/Legal.
  - **Cadence:** Prior to adding a new data source; quarterly review.

### Traceability Matrix (Objectives → Scenarios → Requirements)

| Objective | Scenario ID | Scenario Name | Supporting Requirements |
| --- | --- | --- | --- |
| Obj-1 | SCN-001 | User searches and views current fares | FR-001, FR-002, FR-003, FR-008, NFR-001, NFR-002, SEC-001 |
| Obj-2 | SCN-003 | User views price history for a watch | FR-004, FR-008, DG-001, DG-003, NFR-003 |
| Obj-3 | SCN-002 | User creates a fare watch and receives alerts | FR-005, FR-006, FR-007, SEC-002, DG-002, NFR-004 |
| Obj-4 | SCN-004 | Admin adds/changes data sources safely | FR-009, FR-010, SEC-003, SEC-004, DG-004 |

## Scope of Work

### In Scope

- Support searching for flights for:
  - Origin: LAX
  - Destination: Tokyo (airports TBD: HND, NRT)
  - Travel window: December 2026 (specific date rules TBD)
- Collect flight details and prices from “popular travel sites” via approved integration methods (API/partnership) (sources TBD).
- Normalize and store fare snapshots to build price history.
- Allow users to create and manage fare watches.
- Send notifications when watch criteria are met (MVP: email).
- Provide deep links to complete booking on the source site (no booking in-app).

### Out of Scope

- Booking, checkout, payments, refunds.
- Managing loyalty points, upgrades, seat selection.
- Monitoring other routes/origins/destinations (unless explicitly expanded).
- Monitoring non-December 2026 travel windows (unless explicitly expanded).

## Release Plan / Phasing

### Phase 1 — MVP (single route, Dec 2026)

- Search & results UI for LAX → Tokyo within Dec 2026.
- At least one compliant data source integration (TBD which).
- Price history storage + simple history view.
- Watch creation + email notifications.
- Admin configuration for sources + API keys.

### Phase 2 — Enhancements (only if requested)

- Multiple routes/origins/destinations.
- SMS/push notifications.
- More advanced alert rules (percent change, rolling lows) and richer filtering.

## Out of Scope / Anti-Goals / Future Ideas

- Anti-goal: Web scraping that violates travel-site terms of service.
- Anti-goal: Presenting “guaranteed lowest price” or “buy now” financial advice.
- Future idea (TBD): Multi-city / open-jaw support.

## Stakeholders

| Role | Name / Team | Responsibility |
| --- | --- | --- |
| Product Owner | TBD | Scope, prioritization, success metrics |
| Engineering Lead | TBD | Technical delivery, operations |
| Legal/Compliance | TBD | Review data-source terms and usage constraints |
| Security/Privacy | TBD | Review PII handling (if user accounts/alerts store PII) |

## Operating Environment & Technical Constraints

- **Client:** Web application (mobile + desktop responsive).
- **Server:** Backend API + scheduled worker(s) to refresh fares.
- **Data sources:** Third-party travel APIs/partners (TBD); subject to rate limits and contractual usage requirements.
- **Time zones:** Display and scheduling must be explicit about time zone (default TBD; likely user locale for UI).
- **Constraints:**
  - Must respect data source ToS, robots policies (if applicable), and rate limits.
  - Must handle partial data-source outages and degraded freshness.

## User Personas

### Persona 1 — Casual Traveler

- Plans 1–2 international trips/year and wants an easy way to monitor prices without daily checking.
- Cares about “good enough” price and convenient dates.

### Persona 2 — Deal-Seeking Planner

- Flexible on exact dates and willing to adjust within December 2026 for better price.
- Wants price history and alerts to time a purchase.

## User Scenarios & Use Cases

### SCN-001 — User searches and views current fares

- User enters/chooses:
  - LAX as origin
  - Tokyo as destination (airport(s) TBD)
  - December 2026 dates (exact dates vs range TBD)
  - Cabin class (TBD)
  - Passengers (TBD)
- System shows a list of flight options with:
  - price, provider/source, itinerary details, and a deep link.

### SCN-002 — User creates a fare watch and receives alerts (critical)

- User saves a watch for the search criteria and sets an alert rule (threshold TBD).
- System refreshes fares on a schedule and sends an email when criteria are met.

#### Acceptance Criteria (Gherkin)

```gherkin
Feature: Fare watch alerts
  Scenario: User receives an email when a fare drops below threshold
    Given a user has created a fare watch for LAX to Tokyo for a date in December 2026
      And the user has set an alert threshold price
    When the system refreshes fares and finds an itinerary price below the threshold
    Then the system sends an email alert to the user
      And the alert includes the itinerary summary, observed price, and a booking link
      And the system records the alert event for audit/debugging
```

### SCN-003 — User views price history for a watch

- User opens a watch and views:
  - price over time (daily snapshots)
  - recent change vs prior day/week (TBD)

### SCN-004 — Admin adds/changes data sources safely

- Admin configures data sources (API endpoints/keys) and refresh schedules.
- System validates configuration and monitors ingestion health.

## Functional Requirements & Features

### Search, Results, and Normalization

- **FR-001** — The system shall support searching for flights with origin **LAX** and destination **Tokyo** (airport set TBD) for dates in **December 2026**.
- **FR-002** — The system shall retrieve flight options and prices from configured travel data sources using approved integration methods (API/partner feed).
- **FR-003** — The system shall normalize retrieved results into a consistent itinerary schema (carriers, flight numbers where available, number of stops, duration, departure/arrival timestamps, fare currency).
- **FR-004** — The system shall store fare snapshots over time to support a price history view per watch.
- **FR-008** — The system shall display flight details and provide a deep link to the source/provider for booking.

### Watches and Notifications

- **FR-005** — The system shall allow a user to create, update, and delete fare watches.
- **FR-006** — The system shall support notifying users via email when watch criteria are met.
- **FR-007** — The system shall prevent alert spam by applying a cooldown/deduplication rule (details TBD).

### Administration and Operations

- **FR-009** — The system shall allow an admin to configure data sources and associated credentials (e.g., API keys) and enable/disable sources.
- **FR-010** — The system shall provide ingestion job status (success/failure, last refresh timestamp, error details) for operational support.

## UI / UX Design Specifications

- **UI-001** — Search page with inputs for route (fixed to LAX → Tokyo for MVP), dates (Dec 2026), passengers, cabin class (as applicable).
- **UI-002** — Results page showing a sortable list of itineraries with price, stops, duration, and source/provider.
- **UI-003** — Watch configuration page to set alert rule(s) and refresh frequency (frequency options TBD).
- **UI-004** — Watch detail page showing price history (simple chart/table) and recent alerts.

## Data Management & Governance

### Data Entities (logical)

- User (if accounts are required; auth approach TBD)
- Search Criteria (origin/destination/dates/passengers/cabin)
- Itinerary (normalized itinerary fields)
- Fare Snapshot (price + timestamp + source + itinerary reference)
- Watch (saved search + alert rules)
- Notification Event (alert sent, status)
- Data Source Config (admin-managed)

### Data Governance Requirements

- **DG-001** — The system shall store fare snapshots with a timestamp and source attribution to support auditability.
- **DG-002** — The system shall store only the minimum PII required to deliver alerts (e.g., email) (exact fields TBD).
- **DG-003** — The system shall define and enforce a data retention policy for fare snapshots and notification logs (duration TBD).
- **DG-004** — The system shall document and enforce data-source usage constraints (e.g., caching limits, redistribution limits) per source contract/ToS (TBD).

## Security & Compliance Requirements

- **SEC-001** — The system shall implement basic abuse protections (rate limiting, bot protection where appropriate) to protect data sources and backend stability.
- **SEC-002** — The system shall protect user notification endpoints and preferences from unauthorized access (authentication/authorization approach TBD).
- **SEC-003** — The system shall store third-party API keys/secrets securely (never in client code).
- **SEC-004** — The system shall maintain an access-controlled admin capability for managing data sources.
- **SEC-005** — The system shall log security-relevant events (admin config changes, auth events if applicable) (logging scope TBD).

## Non-Functional Requirements / Quality Attributes

- **NFR-001 (Performance)** — Search results should render within **5 seconds median** under expected load (load assumptions TBD).
- **NFR-002 (Reliability)** — Scheduled refresh jobs should achieve **≥ 98%** daily success (excluding third-party outages).
- **NFR-003 (Data Quality)** — The system should avoid duplicate itineraries where possible and clearly label the source/provider.
- **NFR-004 (Notification Reliability)** — Email alerts should achieve **≥ 99%** delivery success (as measured by provider events).
- **NFR-005 (Maintainability)** — Data-source integrations should be modular to allow adding/removing sources without major refactors.

## Product Architecture Overview

- **Web Client:** Search/results/watch UI.
- **Backend API:** Serves UI, manages watches, provides results from stored snapshots and/or on-demand refresh.
- **Worker/Scheduler:** Periodically pulls fares from configured sources and writes snapshots.
- **Database:** Stores watches, itineraries, fare snapshots, alert logs.
- **Notification Provider:** Sends email alerts.
- **External Integrations:** Travel data sources (APIs/feeds) (TBD).

## Assumptions & Dependencies

- Access to at least one compliant travel data source (API/partner feed) that provides flight itineraries and pricing for the required route/date range.
- Data-source ToS/contract allows caching/displaying prices and deep-linking under defined rules (TBD per source).
- Users accept that prices are indicative and may change at booking time.

## Risks & Mitigations

| Risk | Impact | Likelihood | Mitigation |
| --- | --- | --- | --- |
| Data-source ToS violations (e.g., scraping) | High | Medium | Use APIs/partners only; legal review before adding sources; document constraints per source. |
| Rate limiting / API quota issues | Medium | Medium | Backoff/retry, caching, scheduling, and source rotation (if permitted). |
| Inconsistent/duplicate itinerary data across sources | Medium | High | Normalization + deduping heuristics; clearly display source attribution. |
| Users interpret prices as guaranteed | Medium | Medium | UI disclaimers; show “last updated” and link to source for final price. |

## Open Questions / Issues Log

| ID | Date | Owner | Question / Issue | Status | Target Resolution |
| --- | --- | --- | --- | --- | --- |
| OQ-001 | 2026-03-04 | Product | What is the final product name and target audience (personal use vs public app)? | Open | TBD |
| OQ-002 | 2026-03-04 | Product | Which Tokyo airports should be supported (HND, NRT, both)? | Open | TBD |
| OQ-003 | 2026-03-04 | Product | What trip shape is required (round-trip vs one-way), and what date flexibility rules apply within Dec 2026? | Open | TBD |
| OQ-004 | 2026-03-04 | Product/Legal | Which “popular travel sites” are in scope, and what approved access method will be used for each (API/partner/affiliate)? | Open | TBD |
| OQ-005 | 2026-03-04 | Product | What refresh frequency is needed (hourly/daily), and what’s the acceptable data staleness? | Open | TBD |
| OQ-006 | 2026-03-04 | Product | What alert rules are needed (absolute price threshold, percent drop, new low) and what cooldown/dedup rules? | Open | TBD |
| OQ-007 | 2026-03-04 | Product/Security | Will the app require user accounts/authentication? If yes, what method (TBD)? | Open | TBD |
| OQ-008 | 2026-03-04 | Product | What data retention policy is desired for fare snapshots and alert logs? | Open | TBD |
| OQ-009 | 2026-03-04 | Product | MVP timeline and deployment constraints (hosting preference, budget limits)? | Open | TBD |

## Supporting Materials

- TBD (links to source ToS/contract summaries, API docs, UX mockups).
