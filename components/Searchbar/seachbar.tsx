"use client";
import Fuse from "fuse.js";
import { useState, useMemo } from "react";
import { members, Member } from "@/data/member";

export default function Seachrbar({ onSelect } : { onSelect: (member: Member) => void }) {
  const [query, setQuery] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
 
  const fuse = useMemo(() => {
    return new Fuse(members, {
      keys: ["name", "aliases"],
      threshold: 0.2,
      includeScore: true,
      //    minMatchCharLength: 3
    });
  }, [members]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    setShowDropdown(true);

  };
  const results = useMemo(() => {
    if (!query) return [];
    return fuse.search(query, { limit: 10 }).map((result) => result.item);
  }, [query, fuse]);

  const handleSelect = (member: Member) => {
    onSelect(member);
    setShowDropdown(false);
  };
  return(
    <div>
      <p>Pilih Member</p>
        <div>
          <input
            className="w-75 border p-2"
            placeholder="Search..."
            value={query}
            onChange={handleInputChange}
          />
          <span className="close-button">&times;</span>
        </div>
        {results.length != 0 && showDropdown && (
          <div className="absolute bg-white border w-75 mt-1 max-h-60 overflow-auto">
            {results.map((member: Member) => (
              <div
                key={member.id}
                className="p-2 text-black cursor-pointer hover:bg-gray-100"
                onClick={() => handleSelect(member)}
              >
                {member.name}
              </div>
            ))}
          </div>
        )}
    </div>

  )
}
