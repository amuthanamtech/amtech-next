"use client";

import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../app/firebase/config";

const MessageTable = () => {
  const [messages, setMessages] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "message"));
        const dataList: any[] = [];
        querySnapshot.forEach((doc) => {
          dataList.push({ id: doc.id, ...doc.data() });
        });
        setMessages(dataList);
      } catch (error) {
        console.error("Error  fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-4 overflow-auto">
      <h2 className="text-xl font-bold mb-4">Submitted Profiles</h2>
      <table className="min-w-[1000px] border">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-2 py-1">First Name</th>
            <th className="border px-2 py-1">Last Name</th>
            <th className="border px-2 py-1">Email</th>
            <th className="border px-2 py-1">Phone</th>
            <th className="border px-2 py-1">Total Exp</th>
            <th className="border px-2 py-1">Sitecore Exp</th>
            <th className="border px-2 py-1">React/Next Exp</th>
            <th className="border px-2 py-1">Location</th>
            <th className="border px-2 py-1">Current CTC</th>
            <th className="border px-2 py-1">Expected CTC</th>
            <th className="border px-2 py-1">Qualification</th>
            <th className="border px-2 py-1">Organization</th>
            <th className="border px-2 py-1">Notice Period</th>
            <th className="border px-2 py-1">Referral Note</th>
            <th className="border px-2 py-1">Message</th>
            <th className="border px-2 py-1">Resume File</th>
          </tr>
        </thead>
        <tbody>
          {messages.map((msg) => (
            <tr key={msg.id} className="hover:bg-gray-100 text-sm">
              <td className="border px-2 py-1">{msg.firstName}</td>
              <td className="border px-2 py-1">{msg.lastName}</td>
              <td className="border px-2 py-1">{msg.email}</td>
              <td className="border px-2 py-1">{msg.phone}</td>
              <td className="border px-2 py-1">{msg.experienceTotal}</td>
              <td className="border px-2 py-1">{msg.experienceSitecore}</td>
              <td className="border px-2 py-1">{msg.experienceReactNext}</td>
              <td className="border px-2 py-1">{msg.currentLocation}</td>
              <td className="border px-2 py-1">{msg.currentCTC}</td>
              <td className="border px-2 py-1">{msg.expectedCTC}</td>
              <td className="border px-2 py-1">{msg.qualification}</td>
              <td className="border px-2 py-1">{msg.organization}</td>
              <td className="border px-2 py-1">{msg.noticePeriod}</td>
              <td className="border px-2 py-1">{msg.referralNote}</td>
              <td className="border px-2 py-1">{msg.message}</td>
              <td className="border px-2 py-1">{msg.fileName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MessageTable;
