# Phase 7: Capstone project

**2 weeks · 29 Mar – 9 Apr**

## Goal

Design and build a complete backend on your own, using everything from phases 1–6, and present it to the team.

## Project: appointment reminders service

Clinics text patients a reminder the day before their appointment. Patients can reply to confirm or cancel.

- [ ] Clinics, patients and appointments (reuse your phase 4 model)
- [ ] Every evening, a job schedules a reminder for each appointment the next day
- [ ] Reminders go through a fake SMS provider that you build as a separate service, connected through NATS
- [ ] Patients reply `C` to confirm or `X` to cancel; the appointment updates and staff see it live over a GraphQL subscription
- [ ] A patient who replied `STOP` never receives another message
- [ ] The same reply received twice changes the appointment once
- [ ] `docker compose up` starts everything; a Postman collection demonstrates it end to end
- [ ] `docs/DESIGN.md` explains your design and the trade-offs you made

## Timeline

| Day | Milestone |
| -- | -- |
| 1 | Design note reviewed with your mentor before coding |
| 5 | Mid-point review |
| 10 | Demo to the team, and a code walkthrough |

## Exit checklist

- [ ] Every item above works in the demo
- [ ] I can explain every part of the code and change it live
