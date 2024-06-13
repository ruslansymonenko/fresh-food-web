import { FC } from 'react';
import Link from 'next/link';
import { Mail } from 'lucide-react';
import { Facebook } from 'lucide-react';
import { Instagram } from 'lucide-react';

import styles from './ContactForm.module.scss';

const ContactForm: FC = () => {
  return (
    <div className="my-8">
      <div className={styles.form}>
        <div>
          <h1 className="text-3xl font-extrabold">Let's Talk</h1>
          <p className="text-sm text-gray-400 mt-3">You need some help?</p>
          <div className="mt-12">
            <h2 className="text-lg font-extrabold">Email</h2>
            <ul className="mt-3">
              <li className="flex items-center">
                <div className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                  <Mail />
                </div>
                <a href="mailto: info@fresh-food.com" className="text-rose-600 text-sm ml-3">
                  <small className="block">Mail</small>
                  <strong>info@fresh-food.com</strong>
                </a>
              </li>
            </ul>
          </div>
          <div className="mt-12">
            <h2 className="text-lg font-extrabold">Socials</h2>
            <ul className="flex mt-3 space-x-4">
              <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                <Link href="/">
                  <Instagram />
                </Link>
              </li>
              <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                <Link href="/">
                  <Facebook />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <form className="ml-auo space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]"
          />
          <input
            type="text"
            placeholder="Subject"
            className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]"
          />
          <textarea
            placeholder="Message"
            rows={6}
            className="w-full rounded-md px-4 border text-sm pt-2.5 outline-[#007bff]"
          ></textarea>
          <button type="button" className={styles.button}>
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
