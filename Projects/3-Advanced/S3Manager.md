# S3Manager

**Tier:** 3-Advanced

Managing files directly through the AWS Management Console can be tedious, especially for non-technical users.  
The goal of the **S3Manager** application is to provide a **user-friendly web interface** for managing files in an **AWS S3 bucket**, allowing users to perform common operations like viewing, uploading, and deleting files—all without leaving the browser.

This app connects to an AWS S3 bucket using user-provided credentials and displays the contents of the bucket in a familiar file manager layout. From there, users can browse folders, upload files, create directories, and manage their cloud storage with ease.

## User Stories

-   [ ] User can connect to an S3 bucket by providing their credentials (Access Key ID, Secret Access Key, Region, and Bucket Name).
-   [ ] User can view a list of files and folders in the current directory.
-   [ ] User can navigate into folders to see their contents.
-   [ ] User can navigate back to parent folders.
-   [ ] User can upload one or more files to the current directory.
-   [ ] User can create a new folder in the current directory.
-   [ ] User can delete a file.
-   [ ] User can disconnect from the S3 bucket.

## Bonus features

-   [ ] User can see the progress of file uploads.
-   [ ] User can drag and drop files to upload them.
-   [ ] User credentials are saved in cookies for future sessions.

## Useful links and resources

-   [Next.js Documentation](https://nextjs.org/docs) – Learn about Next.js features and API.
-   [Learn Next.js](https://nextjs.org/learn) – An interactive Next.js tutorial.
-   [AWS SDK for JavaScript](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/) – Documentation for interacting with AWS S3.

## Example projects

-   [s3-explorer](https://github.com/awslabs/aws-js-s3-explorer)
-   [s3-file-browser-component-react](https://github.com/jeehoonkimm/react-s3-file-manager)
