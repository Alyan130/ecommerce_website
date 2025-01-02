

const instagramPosts = [
  {
    id: 1,
    imageUrl: '/images/category2.png',
    alt: 'Wooden chair in cafe setting'
  },
  {
    id: 2,
    imageUrl: '/images/pro1.png',
    alt: 'Modern office chair'
  },
  {
    id: 3,
    imageUrl: '/images/Parent.png',
    alt: 'Pink accent chair'
  },
  {
    id: 4,
    imageUrl: '/images/Parent2.png',
    alt: 'White dining chair'
  },
  {
    id: 5,
    imageUrl: '/images/pro2.png',
    alt: 'Orange modern chair'
  },
  {
    id: 6,
    imageUrl: '/images/pro3.png',
    alt: 'Green office chair'
  },
];

export function ProductPosts() {
  return (
    <section className="py-10 sm:py-16 md:py-18  px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-5xl font-meduim text-center mb-10 font-roboto">
          Follow Products And Discounts On Instagram
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 px-0 md:px-8">
          {instagramPosts.map((post) => (
            <div
              key={post.id}
              className="aspect-square overflow-hidden rounded-lg hover:opacity-90 transition-opacity cursor-pointer"
            >
              <img
                src={`${post.imageUrl}`}
                alt={post.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}