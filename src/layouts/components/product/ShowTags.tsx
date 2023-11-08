"use client"
import { createUrl } from '@/lib/utils';
import { slugify } from '@/lib/utils/textConverter';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useState } from 'react';

type ShowTagsProps = {
  tags: string[];
};

const ShowTags: React.FC<ShowTagsProps> = ({tags}) => {
	const router = useRouter();
  const searchParams = useSearchParams();
	const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const handleTagClick = (name: string) => {
    const slugName = slugify(name.toLowerCase());
    const newParams = new URLSearchParams(searchParams.toString());

    if (name === selectedTag) {
      newParams.delete("t");
      setSelectedTag(null);
    } else {
      newParams.set("t", slugName);
      setSelectedTag(name);
    }

    router.push(createUrl("/products", newParams), { scroll: false });
  };

	return (
		<button className="flex flex-wrap gap-3 mt-4">
            {tags.map((tag: string) => (
              <p
                key={tag}
                className="px-2 py-1 rounded-md border text-light dark:text-darkmode-light"
                onClick={() => handleTagClick(tag)}
              >
                {tag}
              </p>
            ))}
          </button>
	)
}

export default ShowTags