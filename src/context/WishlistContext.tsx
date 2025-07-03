import { createContext, ReactNode, useState } from "react";

type WishlistContextType = {
  items: string[];
  toggleWishlistItem: (id: string) => void;
};

export const WishlistContext = createContext<WishlistContextType>({
  items: [],
  toggleWishlistItem: () => {},
});

export const WishlistProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<string[]>([]);

  const toggleWishlistItem = (id: string) => {
    if (items.includes(id)) setItems(items.filter((item) => item != id));
    else setItems([...items, id]);
  };

  return (
    <WishlistContext.Provider value={{ items, toggleWishlistItem }}>
      {children}
    </WishlistContext.Provider>
  );
};
