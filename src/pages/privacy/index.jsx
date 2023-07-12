import React, { useEffect } from "react"
import Layout from "@modules/layout/templates"
import Head from "@modules/common/components/head"

const Privacy = () => {
  useEffect(() => {
    const addPadding = () => {
      const elements = Array.from(document.getElementsByTagName("p"))
      elements.map((elm) => {
        elm.classList.add("py-2")
      })
    }
    addPadding()
  }, [])

  return (
    <div className="content-container pt-14">
      <Head
        title="Privacy Policy"
        description="Information regarding our Privacy Policy"
      />
      <p className="text-2xl font- pb-8">Privacy Policy</p>{" "}
      <div className="text-sm">
        <p>
          This privacy policy sets out how Liquid Coating Experts uses and
          protects any information that you give us when you use our website.
        </p>
        <p>
          Liquid Coating Experts is committed to ensuring that your privacy is
          protected. Should we ask you to provide certain information by which
          you can be identified when using this website, then you can be assured
          that it will only be used in accordance with this privacy statement.
        </p>
        <p>
          Liquid Coating Experts may change this policy from time to time by
          updating this page. You should check this page from time to time when
          visiting our site to ensure that you are happy with any changes. This
          policy is effective from 1st March 2019.
        </p>
        <p>
          Liquid Coating Experts are committed to protecting the privacy of your
          personal data. For the purpose of the UK Data Protection Act 1998 and
          the General Data Protection Regulation 2016 (the Law), the data
          controllers for any personal information we hold about you are Liquid
          Coating Experts Unit C Mead Park Industrial Estate, Riverway, Harlow,
          Essex, CM20 2SE.
        </p>
        <p>
          This privacy notice explains how your data is collected, used &amp;
          stored. It applies to data collected when you use our website, when
          you interact with us through social media, email, or phone, or when
          you participate in our competitions.
        </p>
        <p className="font-semibold">It covers:</p>

        <ul className="list-disc ml-8">
          <li>The personal data we collect</li>
          <li>How we collect your data</li>
          <li>How we use your data</li>
          <li>Marketing preferences, adverts and cookies</li>
          <li>Links to other websites and third parties</li>
          <li>How we share your data</li>
          <li>Your rights</li>
          <li>Changes to this privacy notice</li>
          <li>How to contact us</li>
        </ul>

        <p>
          If you would like further information about how we collect, use and
          store your personal data, you can contact us at any time by emailing
          sales@liquidcoatingexperts.co.uk or calling us on 07783 029596 or
          writing to us at the above address.
        </p>
        <p className="font-semibold">Our commitment to you</p>
        <p>
          We take the protection of your personal data seriously and will
          process your personal data lawfully and transparently. This privacy
          notice describes the personal data we are collecting about you and how
          it is used.
        </p>
        <p>
          We will only collect and use your personal data for the following
          purposes, to:
        </p>
        <ul className="list-disc ml-8">
          <li>Complete your order(s)</li>
          <li>Give you a better shopping experience</li>
          <li>
            Help us to make our marketing more relevant to you and your
            interests
          </li>
          <li>Improve our services</li>
          <li>Meet our legal responsibilities</li>
        </ul>

        <p className="font-semibold">How we keep your data safe and secure</p>
        <p>
          We have appropriate safeguards and security measures in place to
          protect your data from being accidentally lost, used or accessed in an
          unauthorised way, altered or disclosed. The communication between your
          browser and our website uses a secure encrypted connection wherever
          your personal data is involved. We encrypt your data and store it on
          secure servers hidden behind a firewall.
        </p>
        <p>
          We require any third party who is contracted to process your personal
          data on our behalf (such as payment providers) to have security
          measures in place to protect your data and to treat such data in
          accordance with the law.
        </p>
        <p>
          In the unfortunate event of a personal data breach, we will notify you
          and any applicable regulator when we are legally required to do so.
        </p>
        <p className="font-semibold">The personal data we collect</p>
        <p>
          Personal data means any information about an individual from which
          that person can be identified. It does not include anonymised data,
          where the identity and identifying information has been removed.
        </p>
        <p>
          While our website is designed for a general audience, we will not
          knowingly collect any data from children under the age of 13 or sell
          products to children. If you are under the age of 13, you are not
          permitted to use or submit your data to the website.
        </p>
        <p>The following groups of personal data are collected:</p>
        <ul className="list-disc ml-8">
          <li>
            Identity Data includes information such as: first name, last name,
            title &amp; date of date of birth (optional).
          </li>
          <li>
            Contact Data includes information such as: email address, billing
            address, delivery address, location, country, telephone number and
            social media id (if you log in by social media).
          </li>
          <li>
            Financial Data includes information such as: payment card details.
          </li>
          <li>
            Transaction Data includes information such as: details of your
            purchases and the fulfilment of your orders (such as order number,
            subtotal, title, currency, discounts, shipping, number of items,
            product number, single item price, category, tax etc.); payments to
            and from you and details of other products and services you have
            obtained from us, correspondence or communications with you in
            respect of your orders, and details of any loyalty rewards.
          </li>
          <li>
            Technical Data includes information such as: details of the
            device(s) you use to access our services, your internet protocol
            (IP) address, login data, your username, browser type and version,
            time zone setting and location, browser plug-in types and versions,
            operating system and platform.
          </li>
          <li>
            Profile Data includes information such as: purchases or orders made
            by you, product and style interests, preferences, feedback, and
            survey responses.
          </li>
          <li>
            Usage Data includes information such as: how and when you use our
            website, how you moved around it, what you searched for; website
            performance statistics, traffic, location, weblogs and other
            communication data;
          </li>
          <li>
            Marketing and Communications Data includes information such as: your
            preferences in receiving marketing from us and our third parties and
            your communication preferences.
          </li>
        </ul>

        <p>
          We also collect, use and share Aggregated Data such as statistical or
          demographic data for any purpose. Aggregated Data may be derived from
          your personal data but is not considered personal data as this data
          does not directly or indirectly reveal your identity. For example, we
          may aggregate your Usage Data to calculate the percentage of users
          accessing a specific website feature. However, if we combine or
          connect Aggregated Data with your personal data so that it can
          directly or indirectly identify you, we treat the combined data as
          personal data which will be used in accordance with this privacy
          notice.
        </p>
        <p className="font-semibold">How we collect your data</p>
        <p>We may collect personal data about you in the following ways:</p>
        <ul className="list-disc ml-8">
          <li>
            Direct interactions &ndash; you may give us your Identity, Contact,
            Financial, Transaction, Profile, and Marketing and Communications
            data (as described above) by filling in forms, entering information
            online or by corresponding with us by phone, email, telephone or
            otherwise. This includes personal data you provide, for example,
            when you:
          </li>
          <li>Create an account or purchase products on our website;</li>
          <li>Subscribe to our newsletter, social media sites;</li>
          <li>Enter a competition;</li>
          <li>
            Contact us with an enquiry or to report a problem (by phone, email,
            social media, or messaging service);
          </li>
          <li>When you log in to our website via social media.</li>
          <li>
            Automated technologies or interactions &ndash; as you interact with
            our website, we may automatically collect the following types of
            data (all as described above): Usage Data about your browsing
            actions and patterns, and Contact Data where tasks carried out via
            our website remain uncompleted, such as incomplete orders or
            abandoned baskets. We collect this data by using cookies, server
            logs and other similar technologies. Please see our cookie policy
            for further details.
          </li>
          <li>
            Third parties &ndash; we may receive personal data about you from
            various third parties, including:
          </li>
          <li>
            Technical Data from third parties, including analytics providers
            such as Google.
          </li>
          <li>
            Technical Data from affiliate networks through whom you have
            accessed our website;
          </li>
          <li>
            Identity and Contact Data from social media platforms when you log
            in to our website using such social media platforms;
          </li>
          <li>
            Contact, Financial and Transaction Data from providers of technical,
            payment and delivery services.
          </li>
        </ul>

        <p className="font-semibold">How we use your data</p>
        <p>The legal basis for processing your personal data</p>
        <p>
          We will only collect and process your personal data where we have a
          legal basis to do so. As a data controller, the legal basis for our
          collection and use of your personal data varies depending on the
          manner and purpose for which we collected it.
        </p>
        <p>We will only collect personal data from you when:</p>
        <ul className="list-disc ml-8">
          <li>We have your consent to do so, or</li>
          <li>
            We need your personal data to perform a contract with you. For
            example, to process a payment from you, fulfil your order or provide
            customer support connected with an order, or
          </li>
          <li>
            The processing is in our legitimate interests and not overridden by
            your rights, or
          </li>
          <li>
            We have a legal obligation to collect or disclose personal data from
            you.
          </li>
        </ul>

        <p>
          We will only use your personal data for the purposes for which we
          collected it, unless we reasonably consider that we need to use it for
          another reason and that reason is compatible with the original
          purpose. If we wish to use your personal data for an unrelated
          purpose, we will notify you and we will explain the legal basis which
          allows us to do so. We may process personal data without your consent,
          in compliance with the above rules, where this is required or
          permitted by law.
        </p>
        <p>
          If you have any questions about how Liquid Coating Experts use any of
          your personal data, please contact us as above.
        </p>
        <p className="font-semibold">How long we keep your data for</p>
        <p>
          We will keep your personal data for no longer than is necessary for
          the purpose(s) it was provided for and to meet our legal obligations.
        </p>
        <p className="font-semibold">
          Marketing preferences, adverts and cookies
        </p>
        <p>Marketing - your preferences</p>
        <p>We may send you marketing communications and promotional offers:</p>
        <ul className="list-disc ml-8">
          <li>
            If you have opened an account with us or purchased goods from us, or
            registered for a promotion or event, and you have not opted out of
            receiving that marketing (in accordance with your preferences, as
            explained below);
          </li>
          <li>By email if you have signed up for email newsletters;</li>
          <li>
            If you have provided us with your details when you entered a
            competition and you have consented to receiving such marketing (in
            accordance with your preferences, as explained below).
          </li>
          <li>
            We may use your Identity, Contact, Technical, Transactional, Usage,
            Profile Data and Marketing and Communications Data to form a view on
            what we think you may like, or what may be of interest to you, and
            to send you details of products and offers which may be relevant for
            you.
          </li>
          <li>
            We will ask you for your preferences in relation to receiving
            marketing communications by email and other communication channels.
          </li>
          <li>
            You will always have full control of your marketing preferences. If
            you do not wish to continue receiving marketing information from us
            at any time:
          </li>
          <li>
            You can unsubscribe or &lsquo;opt-out&rsquo; by using the
            unsubscribe button and following the link included in the footer of
            any marketing email; or
          </li>
          <li>
            Account holders may withdraw their consent by simply logging in to
            Your Account and editing your preferences.
          </li>
          <li>
            Contact us with any concerns directly via emailing
            sales@liquidcoatingexperts.co.uk
          </li>
        </ul>

        <p>
          We will process all opt-out requests as soon as possible &amp;
          normally within 1 business day.
        </p>
        <p className="font-semibold">Links to other websites</p>
        <p>
          Our website may contain links to other websites of interest, mainly
          some manufacturers. However, once you have used these links to leave
          our site, you should note that we do not have any control over that
          other website. Therefore, we cannot be responsible for the protection
          and privacy of any information which you provide whilst visiting such
          sites and such sites are not governed by this privacy statement. You
          should exercise caution and look at the privacy statement applicable
          to the website in question.
        </p>
        <p className="font-semibold">How we share your data</p>
        <ul className="list-disc ml-8">
          <li>
            Liquid Coating Experts will not share any of your data to any 3rd
            parties other than for normal business activities such as processing
            your payment &amp; delivering your goods. We may disclose and share
            your personal data with the parties set out below:
          </li>
          <li>
            Payment processing services (including WorldPay, PayPal) to process
            your payment to us. Liquid Coating Experts does not store your
            payment information. Your payment details are provided to the
            payment processing service you have selected, who are compliant with
            necessary regulations;
          </li>
          <li>
            Sharing contact information with our courier partners in order to
            deliver &amp; track your orders;
          </li>
          <li>
            Affiliate networks through whom you have accessed our website;
          </li>
          <li>
            To any third party to whom we may choose to sell our business or our
            assets. Alternatively, we may seek to acquire other businesses or
            merge with them. If a change happens to our business, then the new
            owners may use your personal data in the same way as set out in this
            privacy notice.
          </li>
          <li>
            To protect our customers and website from fraud and theft, we may
            share personal data that is required to make identity checks and
            personal data that we obtain from making identity checks (including
            data relating to your, name and location), together with account
            information, with organisations (including law enforcement
            agencies), involved in fraud prevention and detection and credit
            risk reduction. Please note that these third parties may retain a
            record of the information that we provide to them for this purpose;
          </li>
          <li>
            If we are under a duty to disclose or share your personal data in
            order to comply with any legal obligation;
          </li>
        </ul>

        <p className="font-semibold">Your Rights</p>
        <p>
          You have several rights under the data privacy legislation. This
          includes, under certain circumstances, the right to:
        </p>
        <ul className="list-disc ml-8">
          <li>Request access to your personal data</li>
          <li>Request correction of your personal data</li>
          <li>Request erasure of your personal data</li>
          <li>Request restriction of processing of your personal data</li>
          <li>Request the transfer of your personal data</li>
          <li>Object to processing of your personal data</li>
          <li>Object to automated decision making</li>
        </ul>

        <p>
          Brief details of each of these rights are set out below. If you wish
          to exercise any of these rights, please email
          sales@liquidcoatingexperts.co.uk
        </p>
        <p className="font-semibold">Request access to your personal data</p>
        <p>
          You have the right to obtain a copy of the personal data we hold about
          you and certain information relating to our processing of your
          personal data.
        </p>
        <p className="font-semibold">
          Request correction of your personal data
        </p>
        <p>
          You are entitled to have your personal data corrected if it is
          inaccurate or incomplete. You can update your personal data at any
          time by logging into your account and updating your details directly,
          or by emailing us sales@liquidcoatingexperts.co.uk
        </p>
        <p className="font-semibold">Request erasure of your personal data</p>
        <p>
          This enables you to request that Liquid Coating Experts delete your
          personal data, where there is no good reason for us continuing to
          process it. Note, however, that we may not always be able to comply
          with your request of erasure for specific legal reasons which will be
          notified to you, if applicable, at the time of your request.
        </p>
        <p className="font-semibold">
          Request restriction of processing of your personal data
        </p>
        <p>
          You have a right to ask Liquid Coating Experts to suspend the
          processing of your personal data in certain scenarios, for example if
          you want us to establish the accuracy of the data, or you have
          objected to our use of your data but we need to verify whether we have
          overriding legitimate grounds to use it. Where processing is
          restricted, we are allowed to retain sufficient information about you
          to ensure that the restriction is respected in future.
        </p>
        <p className="font-semibold">
          Request the transfer of your personal data
        </p>
        <p>
          You have the right to obtain a digital copy of your personal data or
          request the transfer of your personal data to another company. Please
          note though that this right only applies to automated data which you
          initially provided consent for us to use or where we used the data to
          perform a contract with you.
        </p>
        <p className="font-semibold">
          Object to processing of your personal data
        </p>
        <p>
          You have the right to object to the processing of your personal data
          where we believe we have a legitimate interest in processing it (as
          explained above). You also have the right to object to our processing
          of your personal data for direct marketing purposes. In some cases, we
          may demonstrate that we have compelling legitimate grounds to process
          your data which override your rights and freedoms.
        </p>
        <p className="font-semibold">Right to lodge a complaint</p>
        <p>
          If you have any concerns or complaints regarding the way in which we
          process your data, please email us directly at
          sales@liquidcoatingexperts.co.uk
        </p>
        <p>
          You also have the right to make a complaint to the ICO (the data
          protection regulator in the UK). We would, however, appreciate the
          chance to deal with your concerns before you approach the ICO, so
          please do contact us in the first instance.
        </p>
        <p className="font-semibold">Changes to this privacy notice</p>
        <p>
          From time to time we may change this privacy notice. If there are any
          significant changes we will post updates on our website, applications
          or let you know by email. This privacy notice was last updated 1st
          March 2019.
        </p>
      </div>
      <p className="font-semibold">How to contact us</p>
      <p>We are happy to answer any questions you may have about your data.</p>
      <p>Liquid Coating Experts</p>
    </div>
  )
}
Privacy.getLayout = (page) => {
  return <Layout>{page}</Layout>
}
export default Privacy
