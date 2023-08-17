import { toast } from 'react-toastify';

export const useCreateContact = () => {
  const createContact = async (data: any) => {
      const res = await fetch('/api/contacts', {
        method: 'POST',
        body: JSON.stringify(data),
      });

      if(res.status === 201) {
        toast.success('Your message has been sent');
      }
  }
  return {createContact}
};
