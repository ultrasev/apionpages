import { Locale, hermes } from "@/lib/i18n-config";
import React from "react";
export const runtime = "edge";

interface TermsOfServiceProps {
  companyName: string;
  serviceName: string;
  contactEmail: string;
  lastUpdated: string;
  websiteUrl: string;
}

const variables: TermsOfServiceProps = {
  companyName: "Pantheon Inc.",
  serviceName: "Exorcism",
  contactEmail: "i@ultrasev.com",
  lastUpdated: "2024-10-22",
  websiteUrl: "https://exorcism.com",
};

export default function TOS({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  return (
    <div className="w-full sm:max-w-[90%] md:max-w-[80%] lg:max-w-[70%] xl:max-w-[60%] mx-auto p-6 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
      <h1 className="text-2xl font-bold mb-4">
        {hermes(lang, {
          en: "Terms of Service",
          zh: "服务条款",
        })}
      </h1>
      <p className="mb-4">
        {hermes(lang, {
          en: `Last Updated: ${variables.lastUpdated}`,
          zh: `最后更新：${variables.lastUpdated}`,
        })}
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        {hermes(lang, {
          en: "1. Acceptance of Terms",
          zh: "1. 条款接受",
        })}
      </h2>
      <p className="mb-4">
        {hermes(lang, {
          en: `By accessing or utilizing ${variables.serviceName} located at ${variables.websiteUrl} (hereinafter referred to as the "Service"), you hereby acknowledge and agree to be bound by these Terms of Service (the "Terms"). Should you disagree with any provision contained herein, you are advised to refrain from using the Service.`,
          zh: `访问或使用位于 ${variables.websiteUrl} 的 ${variables.serviceName}（"服务"）即表示您同意受这些服务条款的约束。如果您不同意这些条款的任何部分，请勿使用该服务。`,
        })}
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        {hermes(lang, {
          en: "2. Service Description",
          zh: "2. 服务描述",
        })}
      </h2>
      <p className="mb-4">
        {hermes(lang, {
          en: `${variables.serviceName} is a sophisticated cross-platform data synchronization service that facilitates the synchronization of textual data across multiple devices, enables data sharing among users, and provides access to historical data records. Our service incorporates real-time update functionality and prioritizes the security and privacy of your data.`,
          zh: `${variables.serviceName} 是一个跨平台数据同步服务，允许用户在不同设备之间同步文本数据，与他人共享数据，并可以回顾历史数据。我们提供实时更新功能，并致力于确保您数据的安全性和隐私。`,
        })}
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        {hermes(lang, {
          en: "3. User Registration and Account Security",
          zh: "3. 用户注册和账户安全",
        })}
      </h2>
      <p className="mb-4">
        {hermes(lang, {
          en: `To utilize this Service, you must be at least 13 years of age. Upon registration, you are required to provide accurate, current, and complete information. You bear sole responsibility for maintaining the confidentiality of your account and password, and for all activities that occur under your account. You are obligated to promptly notify ${variables.companyName} of any unauthorized use of your account or any other breach of security.`,
          zh: `您必须年满13岁才能使用本服务。注册时，请提供准确、最新和完整的信息。您有责任维护您的账户和密码的安全，并对您账户下的所有活动负责。如果发现未经授权使用您的账户或任何其他安全漏洞，您有义务立即通知 ${variables.companyName}。`,
        })}
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        {hermes(lang, {
          en: "4. User Rights",
          zh: "4. 用户的权利",
        })}
      </h2>
      <p className="mb-4">
        {hermes(lang, {
          en: `You retain all proprietary rights in any content you submit, post, or display through the Service. The use of our Service does not confer any transfer of ownership of such content to ${variables.companyName}. However, by submitting, posting, or displaying content, you grant ${variables.companyName} a worldwide, non-exclusive, royalty-free license to use, reproduce, adapt, publish, translate and distribute such content in connection with the Service.`,
          zh: `您保留您通过服务提交、发布或显示的任何内容的所有权利。使用我们的服务不会转让这些内容的所有权给 ${variables.companyName}。但是，通过提交、发布或显示内容，您授予 ${variables.companyName} 全球范围内的非独占、免版税许可，以使用、复制、改编、发布、翻译和分发与服务相关的此类内容。`,
        })}
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        {hermes(lang, {
          en: "5. Prohibited Uses and Termination",
          zh: "5. 禁止用途和终止",
        })}
      </h2>
      <p className="mb-4">
        {hermes(lang, {
          en: `You are expressly prohibited from using ${variables.serviceName} to:`,
          zh: `您明确禁止使用 ${variables.serviceName} 来：`,
        })}
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>
          {hermes(lang, {
            en: "Violate any applicable laws, statutes, ordinances, or regulations",
            zh: "违反任何适用的法律、法规或条例",
          })}
        </li>
        <li>
          {hermes(lang, {
            en: "Infringe upon or violate the intellectual property rights or any other rights of others",
            zh: "侵犯或违反他人的知识产权或任何其他权利",
          })}
        </li>
        <li>
          {hermes(lang, {
            en: "Disseminate malicious software, code, or any other content designed to interfere with, disrupt, or damage any software, hardware, or telecommunications equipment",
            zh: "传播恶意软件、代码或任何其他旨在干扰、破坏或损坏任何软件、硬件或通信设备的内容",
          })}
        </li>
        <li>
          {hermes(lang, {
            en: "Interfere with, disrupt, or attempt to gain unauthorized access to the Service or any computer systems or networks connected to the Service",
            zh: "干扰、破坏或试图未经授权访问服务或与服务相连的任何计算机系统或网络",
          })}
        </li>
      </ul>
      <p className="mb-4">
        {hermes(lang, {
          en: `In the event of a violation of these Terms, ${variables.companyName} reserves the right to suspend or terminate your account. While we typically provide prior notice of such actions, we retain the right to immediately suspend or terminate your account without notice in cases of severe violations or where we deem it necessary to protect the Service, its users, or ${variables.companyName}.`,
          zh: `如果您违反这些条款，${variables.companyName} 保留暂停或终止您的账户的权利。虽然我们通常会事先通知此类行动，但在严重违规或我们认为有必要保护服务、其用户或 ${variables.companyName} 的情况下，我们保留立即暂停或终止您的账户而不另行通知的权利。`,
        })}
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        {hermes(lang, {
          en: "6. Modifications to Terms",
          zh: "6. 条款修改",
        })}
      </h2>
      <p className="mb-4">
        {hermes(lang, {
          en: `${variables.companyName} reserves the right, at its sole discretion, to modify or replace these Terms at any time. In the event of substantial modifications, we will make reasonable efforts to provide notice prior to new terms taking effect. Your continued use of the Service after any such changes constitutes your acceptance of the new Terms.`,
          zh: `${variables.companyName} 保留随时自行决定修改或替换这些条款的权利。如果有重大修改，我们将在新条款生效前尽合理努力提供通知。在任何此类更改后继续使用服务即表示您接受新的条款。`,
        })}
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        {hermes(lang, {
          en: "7. Contact Information",
          zh: "7. 联系我们",
        })}
      </h2>
      <p className="mb-4">
        {hermes(lang, {
          en: "Should you have any inquiries regarding these Terms, please contact us at: ",
          zh: "如果您对这些条款有任何问题，请联系我们：",
        })}
        <a
          href={`mailto:${variables.contactEmail}`}
          className="text-blue-600 hover:underline"
        >
          {variables.contactEmail}
        </a>
      </p>
    </div>
  );
}
