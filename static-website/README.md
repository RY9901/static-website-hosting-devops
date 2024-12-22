# Static Website To-Do List

This project is a simple static website that features a to-do list application. The application allows users to add, remove, and manage tasks using local storage for data persistence.

## Project Structure

```
static-website
├── src
│   ├── css
│   │   └── styles.css
│   ├── js
│   │   └── app.js
│   └── index.html
├── .gitignore
└── README.md
```

## Files Description

- `src/index.html`: The main HTML document that contains the structure of the webpage and the to-do list markup.
- `src/css/styles.css`: Contains the styles for the website, defining layout, colors, and fonts.
- `src/js/app.js`: JavaScript code that implements the CRUD functionality for the to-do list, utilizing local storage for data management.
- `.gitignore`: Specifies files and directories to be ignored by Git.

## Deployment Instructions

To host this static website on AWS S3, follow these steps:

1. **Create an S3 Bucket**:
   - Log in to your AWS Management Console.
   - Navigate to S3 and create a new bucket. Ensure the bucket name is unique.

2. **Upload Files**:
   - Upload the contents of the `src` directory to the S3 bucket.

3. **Configure Bucket for Static Website Hosting**:
   - Go to the properties of your S3 bucket.
   - Enable static website hosting and specify `index.html` as the index document.

4. **Set Permissions**:
   - Update the bucket policy to allow public access to the files. You can use the following policy:
     ```json
     {
       "Version": "2012-10-17",
       "Statement": [
         {
           "Sid": "PublicReadGetObject",
           "Effect": "Allow",
           "Principal": "*",
           "Action": "s3:GetObject",
           "Resource": "arn:aws:s3:::your-bucket-name/*"
         }
       ]
     }
     ```

5. **Access Your Website**:
   - Once the files are uploaded and the bucket is configured, you can access your website using the endpoint provided in the static website hosting settings.

## Local Development

To run the project locally, simply open `src/index.html` in your web browser. You can edit the CSS and JavaScript files to customize the appearance and functionality of the to-do list.