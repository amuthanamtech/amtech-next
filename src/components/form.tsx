"use client";

import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css';
import { collection, addDoc } from "firebase/firestore";
import { db } from "../app/firebase/config";
import { v4 as uuidv4 } from "uuid";

const FormLogin = () => {
    const [file1, setFile1] = useState<File | null>(null);
    const [isUploading, setIsUploading] = useState(false);
    const [message, setMessage] = useState('');
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
        experienceTotal: "",
        experienceSitecore: "",
        experienceReactNext: "",
        currentLocation: "",
        currentCTC: "",
        expectedCTC: "",
        qualification: "",
        organization: "",
        noticePeriod: "",
        referralNote: "",
    });

    const [file, setFile] = useState<File | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));
    };

    const handlePhoneChange = (value: string) => {
        setFormData((prev) => ({ ...prev, phone: value }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFile(e.target.files?.[0] || null);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const resumeId = uuidv4();

            await addDoc(collection(db, "message"), {
                ...formData,
                fileName: file?.name || "",
                resumeId: resumeId,
                createdAt: new Date(),
            });
            if (!file) return;

            setIsUploading(true);
            setMessage('');

            try {
                const formData = new FormData();
                formData.append('file', file);

                const response = await fetch('/api/upload', {
                    method: 'POST',
                    body: formData,
                    // Don't set Content-Type header - browser will set it automatically with boundary
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json() as { filename: string };
                setMessage(`File uploaded successfully: ${data.filename}`);
            } catch (error) {
                console.error('Upload error:', error);
                setMessage(`Error uploading file: ${error instanceof Error ? error.message : String(error)}`);
            } finally {
                setIsUploading(false);
            }

            alert("Form submitted successfully!");

            setFormData({
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                message: "",
                experienceTotal: "",
                experienceSitecore: "",
                experienceReactNext: "",
                currentLocation: "",
                currentCTC: "",
                expectedCTC: "",
                qualification: "",
                organization: "",
                noticePeriod: "",
                referralNote: "",


            });
            setFile(null);
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("Submission failed!");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 py-10 px-4">
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6 sm:p-10">
                <h1 className="text-3xl font-bold text-center mb-6">Submit Your Profile</h1>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input id="firstName" value={formData.firstName} onChange={handleInputChange} required className="p-2 border rounded" placeholder="First Name *" />
                        <input id="lastName" value={formData.lastName} onChange={handleInputChange} required className="p-2 border rounded" placeholder="Last Name" />
                        <input id="email" type="email" value={formData.email} onChange={handleInputChange} required className="p-2 border rounded" placeholder="Email *" />
                        <PhoneInput
                            country={'in'}
                            value={formData.phone}
                            onChange={handlePhoneChange}
                            inputProps={{ name: 'phone', required: true, id: 'phone' }}
                            inputClass="!w-full !pl-14 !pr-5 !py-4 !border !rounded !text-black placeholder-gray-400 !text-sm"
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <select id="experienceTotal" value={formData.experienceTotal} onChange={handleInputChange} className="p-2 border rounded">
                            <option value="">Total Experience (years)</option>
                            {[...Array(21)].map((_, i) => <option key={i} value={i}>{i} year{i !== 1 ? "s" : ""}</option>)}
                        </select>
                        <select id="experienceSitecore" value={formData.experienceSitecore} onChange={handleInputChange} className="p-2 border rounded">
                            <option value="">Sitecore Experience (years)</option>
                            {[...Array(21)].map((_, i) => <option key={i} value={i}>{i} year{i !== 1 ? "s" : ""}</option>)}
                        </select>
                        <select id="experienceReactNext" value={formData.experienceReactNext} onChange={handleInputChange} className="p-2 border rounded">
                            <option value="">React/Next.js Experience (years)</option>
                            {[...Array(21)].map((_, i) => <option key={i} value={i}>{i} year{i !== 1 ? "s" : ""}</option>)}
                        </select>
                        <select
                            id="currentLocation"
                            value={formData.currentLocation}
                            onChange={handleInputChange}
                            className="p-2 border rounded"
                        >
                            <option value="">Select Country</option>
                            {[
                                "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina",
                                "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh",
                                "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina",
                                "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia",
                                "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros",
                                "Congo (Congo-Brazzaville)", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic",
                                "Democratic Republic of the Congo", "Denmark", "Djibouti", "Dominica", "Dominican Republic",
                                "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini",
                                "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana",
                                "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras",
                                "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy",
                                "Ivory Coast", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kuwait",
                                "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein",
                                "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta",
                                "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco",
                                "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar (Burma)", "Namibia", "Nauru",
                                "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea",
                                "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea",
                                "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda",
                                "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino",
                                "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone",
                                "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea",
                                "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria",
                                "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago",
                                "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates",
                                "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela",
                                "Vietnam", "Yemen", "Zambia", "Zimbabwe"
                            ].map((country) => (
                                <option key={country} value={country}>{country}</option>
                            ))}
                        </select>
                        <input id="currentCTC" value={formData.currentCTC} onChange={handleInputChange} className="p-2 border rounded" placeholder="Current CTC" />
                        <input id="expectedCTC" value={formData.expectedCTC} onChange={handleInputChange} className="p-2 border rounded" placeholder="Expected CTC" />
                    </div>

                    <input id="qualification" value={formData.qualification} onChange={handleInputChange} className="w-full p-2 border rounded" placeholder="Highest Qualification" />
                    <input id="organization" value={formData.organization} onChange={handleInputChange} className="w-full p-2 border rounded" placeholder="Current Organization" />
                    <input id="noticePeriod" value={formData.noticePeriod} onChange={handleInputChange} className="w-full p-2 border rounded" placeholder="Notice Period" />
                    <textarea id="referralNote" value={formData.referralNote} onChange={handleInputChange} className="w-full p-2 border rounded h-20" placeholder="Know someone perfect for this? Mention them here!" />
                    <textarea id="message" value={formData.message} onChange={handleInputChange} className="w-full p-2 border rounded h-24" placeholder="Do you want to say anything?" />

                    <div>
                        <label className="block font-medium mb-1">Upload Resume (PDF/DOC)</label>
                        <label htmlFor="file" className="inline-block cursor-pointer bg-black text-white font-medium py-2 px-4 rounded hover:bg-black transition">
                            {file ? file.name : "Choose File"}
                        </label>
                        <input type="file" id="file" accept=".pdf,.doc,.docx" onChange={handleFileChange} className="hidden" />
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="bg-secondary w-full  text-black py-3 rounded hover:bg-secondary transition"
                    >
                        {isLoading ? "Submitting..." : "Submit Profile"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default FormLogin;
