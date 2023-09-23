import React, { useState } from 'react';

const FileUploadTest = () => {
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);

        // Automatically trigger the upload when a file is selected
        handleUpload(selectedFile);
    };

    const handleUpload = (selectedFile) => {
        if (selectedFile) {
            const storageRef = storage.ref();
            const fileRef = storageRef.child(selectedFile.name);

            fileRef.put(selectedFile).then(() => {
                console.log('File uploaded successfully');
                // You can add more logic here, like updating the UI or database.
            });
        } else {
            console.log('No file selected');
        }
    };

    return (
        <div className="fixed z-10 top-0 w-full h-full flex bg-black bg-opacity-60">
            <div className="extraOutline p-4 bg-white w-full md:w-max bg-whtie m-auto rounded-lg">
                <div className="file_upload p-5 relative border-4 border-dotted border-gray-300 rounded-lg md:w-96">
                    <svg
                        className="text-indigo-500 w-24 mx-auto mb-4"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                        />
                    </svg>
                    <div className="input_field flex flex-col w-max mx-auto text-center">
                        <label>
                            {/* Modify your file input to trigger handleFileChange */}
                            <input
                                className="text-sm cursor-pointer w-36 md:w-48 hidden"
                                type="file"
                                onChange={handleFileChange}
                            // Add "accept" attribute if you want to specify file types (e.g., accept="image/*")
                            />
                            <div className="text bg-indigo-600 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-indigo-500">
                                Select
                            </div>
                        </label>
                        <div className="title text-indigo-500 uppercase">or drop files here</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FileUploadTest;
