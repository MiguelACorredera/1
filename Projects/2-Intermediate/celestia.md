# celestia

*Tier: 2-Intermediate

The purpose of this application is to keep track of the medical records of the patients.
It is a  comprehensive health application featuring an interactive 3D self-diagnosis and AI-powered pill identifier.
It consists of patient and doctor pages where doctors can access patient records and patients can make appointments with doctors and track their medications

## user stories
-There are two types of users in this application[patient and doctor]
-Patient can login by using gmail easily after that by filling the details of their consulted doctor and hospital, reports can be seen by patient,he can track his medication and can schedule an appointment with his doctor
-Doctor can login through the application by using the credentials created by super admin, then doctor can access to the patients file and check there appointments and can track the patients medication

**Patient Workflow:**
- Login via Gmail
- View medical reports and consulted doctor/hospital details
- Track medications
- Schedule appointments with doctors

**Doctor Workflow:**
- Login with super-admin-created credentials
- Access patient files
- View patient appointments
- Track patient medications

## Developer Notes
-By using the credentials created by super admin, only the doctor can access the records of their patients
-The doctor login consists of two-step verification by completing it. Once completed, they can login through the application

## Bonus features
**Treatment Recommendations**: AI-generated treatment summaries including self-care tips
**AI-Powered Analysis**: Get AI-generated condition analysis based on symptoms
**Medical Conditions Database**: Comprehensive information on various medical conditions

## Useful links and resources
+**Supabase** (for database): https://supabase.com/
+**3D Mesh Provider**: https://www.meshy.ai/

## Example projects
 [Celestia Care](https://celestiacare.net/) — reference implementation (many functionalities remain to be developed)