# Tasks

## Setup (optional)

If you don't have a personal AWS account:

- Create an AWS account
- Make sure you correctly setup billing alerts, to avoid any overcharges in case your API code develops bugs

## Get familiar with the data

This is your Employee entity:

```json
{
    city: String,
    department: String,
    departmentId: String,
    email: String<Email>,
    fullName: String,
    gender: String,
    hireDate: String<Date>, // UTC format
    id: String<UID>,
    isPermanent: Boolean,
    mobile: String<PhoneNo>, // UK format
}
```

This is your Department entity:

```json
{
    name: String,
    id: String<UID>
}

```


These are the employee departments:

```json
[
  { name: "Development", id: 132 },
  { name: "Marketing", id: 243 },
  { name: "Accounting", id: 334 },
  { name: "HR", id: 456 },
  { name: "None", id: 554 },
]
```

Consider how you plan to store this data in the database.

## Architect

- Decide what AWS services to use for the database and API.

- Decide how you plan to deploy the AWS services, we recommend Serverless Framework or CDK.

- Decide what structure your database will have using the above entities. Make sure that works with the usage patterns from the UI.

- Decide what routes your API will have

- Decide how you plan to authenticate the backend

- Design your paths names and path structure. Carefully consider how the api will be used by the UI.

## Develop

- Commit early and often

- Use a separate repo for the backend

- Push up all you changes before sharing the links with us

- Organise your API using a pattern e.g. MVC or other.

- Organise the endpoints in a logical fashion.

- Seed your database with more than 50 random employees, sample provide in `seedEmployees.js`

- Test as you develop using mock payloads

- Deploy the API using Serverless Framework or CDK

Optional: 
- consider validating your incoming and outgoing payloads
- consider testing your endpoints
- consider documenting your endpoints
