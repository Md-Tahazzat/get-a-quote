const HeroTestimonialContentHeader = () => {
  return (
    <tr>
      <th
        scope="col"
        className="py-3.5 px-4 text-sm font-semibold text-left rtl:text-right text-gray-500"
      >
        <span>Client Image</span>
      </th>

      <th
        scope="col"
        className="px-12 py-3.5 text-sm font-semibold text-left rtl:text-right text-gray-500 dark:text-gray-400"
      >
        <span>Name</span>
      </th>
      <th
        scope="col"
        className="px-12 py-3.5 text-sm font-semibold text-left rtl:text-right text-gray-500 dark:text-gray-400"
      >
        <span>Position</span>
      </th>
      <th
        scope="col"
        className="px-12 py-3.5 text-sm font-semibold text-left rtl:text-right text-gray-500 dark:text-gray-400"
      >
        <span>Comments</span>
      </th>

      <th
        scope="col"
        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
      >
        Rating
      </th>
      <th
        scope="col"
        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
      >
        Update
      </th>

      <th
        scope="col"
        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
      >
        Delete
      </th>
    </tr>
  );
};

export default HeroTestimonialContentHeader;
