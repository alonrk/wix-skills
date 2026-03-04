# Wix Bookings

Actionable playbook for Wix Bookings APIs.

## Domain Root

- `https://dev.wix.com/docs/api-reference/business-solutions/bookings`

## Operation Registry

- `tools/http/operations/wix-bookings.json`

## Operation Cards

### 1) Query Services

- **Operation id**: `wix-bookings.query-services`
- **HTTP**: `POST https://www.wixapis.com/_api/bookings/v2/services/query`
- **Run**:

```bash
node tools/http/wix-request.js --operation wix-bookings.query-services --body '{"query":{"paging":{"limit":50}}}'
```

### 2) Create Service

- **Operation id**: `wix-bookings.create-service`
- **HTTP**: `POST https://www.wixapis.com/_api/bookings/v2/services`
- **Run**:

```bash
node tools/http/wix-request.js --operation wix-bookings.create-service --body '{"service":{"type":"APPOINTMENT","name":"Consultation","defaultCapacity":1,"onlineBooking":{"enabled":true},"payment":{"rateType":"NO_FEE"}}}'
```

### 3) Get Service

- **Operation id**: `wix-bookings.get-service`
- **HTTP**: `GET https://www.wixapis.com/_api/bookings/v2/services/{serviceId}`
- **Run**:

```bash
node tools/http/wix-request.js --operation wix-bookings.get-service --params '{"serviceId":"<service-guid>"}'
```

### 4) Update Service

- **Operation id**: `wix-bookings.update-service`
- **HTTP**: `PATCH https://www.wixapis.com/_api/bookings/v2/services/{serviceId}`
- **Run**:

```bash
node tools/http/wix-request.js --operation wix-bookings.update-service --params '{"serviceId":"<service-guid>"}' --body '{"service":{"id":"<service-guid>","revision":1,"name":"Updated Name"}}'
```

### 5) Query Staff Members

- **Operation id**: `wix-bookings.query-staff-members`
- **HTTP**: `POST https://www.wixapis.com/bookings/v1/staff-members/query`
- **Run**:

```bash
node tools/http/wix-request.js --operation wix-bookings.query-staff-members --body '{"query":{"paging":{"limit":50}}}'
```

### 6) Create Staff Member

- **Operation id**: `wix-bookings.create-staff-member`
- **HTTP**: `POST https://www.wixapis.com/bookings/v1/staff-members`
- **Run**:

```bash
node tools/http/wix-request.js --operation wix-bookings.create-staff-member --body '{"staffMember":{"name":"Therapist A"}}'
```

### 7) Delete Staff Member

- **Operation id**: `wix-bookings.delete-staff-member`
- **HTTP**: `DELETE https://www.wixapis.com/bookings/v1/staff-members/{staffMemberId}`
- **Run**:

```bash
node tools/http/wix-request.js --operation wix-bookings.delete-staff-member --params '{"staffMemberId":"<staff-member-guid>"}'
```

### 8) List Availability Time Slots

- **Operation id**: `wix-bookings.list-availability-time-slots`
- **HTTP**: `POST https://www.wixapis.com/_api/service-availability/v2/time-slots/list`
- **Run**:

```bash
node tools/http/wix-request.js --operation wix-bookings.list-availability-time-slots --body '{"serviceId":"<service-guid>","timeZone":"America/New_York","fromLocalDate":"2026-01-01","toLocalDate":"2026-01-07"}'
```

### 9) Get Availability Time Slot

- **Operation id**: `wix-bookings.get-availability-time-slot`
- **HTTP**: `POST https://www.wixapis.com/_api/service-availability/v2/time-slots/get`
- **Run**:

```bash
node tools/http/wix-request.js --operation wix-bookings.get-availability-time-slot --body '{"serviceId":"<service-guid>","timeSlot":{"startDate":"2026-01-02T10:00:00Z","endDate":"2026-01-02T10:30:00Z"}}'
```

### 10) Create Booking

- **Operation id**: `wix-bookings.create-booking`
- **HTTP**: `POST https://www.wixapis.com/bookings/v2/bookings`
- **Run**:

```bash
node tools/http/wix-request.js --operation wix-bookings.create-booking --body '{"booking":{"bookedEntity":{"slot":{"serviceId":"<service-guid>"}},"totalParticipants":1}}'
```

### 11) Bulk Create Booking

- **Operation id**: `wix-bookings.bulk-create-booking`
- **HTTP**: `POST https://www.wixapis.com/bookings/v2/bulk/bookings/create`
- **Run**:

```bash
node tools/http/wix-request.js --operation wix-bookings.bulk-create-booking --body '{"bookings":[{"bookedEntity":{"slot":{"serviceId":"<service-guid>"}},"totalParticipants":1}]}'
```

## Guardrails

- Keep service-type handling explicit (`APPOINTMENT`, `CLASS`, `COURSE`).
- Verify app/module enablement before mutating flows.
- Use docs-backed payloads only for service/staff writes.
