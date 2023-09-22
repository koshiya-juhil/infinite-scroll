const mockApiData = [
    {
        id: 1,
        name: 'Item 1',
        description: 'Description for Item 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac lectus vitae odio feugiat fringilla id a sapien. Integer lacinia sem vel nibh hendrerit, vel mattis arcu finibus. Aenean vel tristique eros, nec bibendum odio. Sed nec arcu vel arcu hendrerit efficitur id in sapien.',
        image: 'https://via.placeholder.com/150',
    },
    {
        id: 2,
        name: 'Item 2',
        description: 'Description for Item 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac lectus vitae odio feugiat fringilla id a sapien. Integer lacinia sem vel nibh hendrerit, vel mattis arcu finibus. Aenean vel tristique eros, nec bibendum odio. Sed nec arcu vel arcu hendrerit efficitur id in sapien.',
        image: 'https://via.placeholder.com/150',
    },
    {
        id: 3,
        name: 'Item 3',
        description: 'Description for Item 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac lectus vitae odio feugiat fringilla id a sapien. Integer lacinia sem vel nibh hendrerit, vel mattis arcu finibus. Aenean vel tristique eros, nec bibendum odio. Sed nec arcu vel arcu hendrerit efficitur id in sapien.',
        image: 'https://via.placeholder.com/150',
    },
    {
        id: 4,
        name: 'Item 4',
        description: 'Description for Item 4. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac lectus vitae odio feugiat fringilla id a sapien. Integer lacinia sem vel nibh hendrerit, vel mattis arcu finibus. Aenean vel tristique eros, nec bibendum odio. Sed nec arcu vel arcu hendrerit efficitur id in sapien.',
        image: 'https://via.placeholder.com/150',
    },
    {
        id: 5,
        name: 'Item 5',
        description: 'Description for Item 5. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac lectus vitae odio feugiat fringilla id a sapien. Integer lacinia sem vel nibh hendrerit, vel mattis arcu finibus. Aenean vel tristique eros, nec bibendum odio. Sed nec arcu vel arcu hendrerit efficitur id in sapien.',
        image: 'https://via.placeholder.com/150',
    },
    {
        id: 6,
        name: 'Item 6',
        description: 'Description for Item 6. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac lectus vitae odio feugiat fringilla id a sapien. Integer lacinia sem vel nibh hendrerit, vel mattis arcu finibus. Aenean vel tristique eros, nec bibendum odio. Sed nec arcu vel arcu hendrerit efficitur id in sapien.',
        image: 'https://via.placeholder.com/150',
    },
    {
        id: 7,
        name: 'Item 7',
        description: 'Description for Item 7. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac lectus vitae odio feugiat fringilla id a sapien. Integer lacinia sem vel nibh hendrerit, vel mattis arcu finibus. Aenean vel tristique eros, nec bibendum odio. Sed nec arcu vel arcu hendrerit efficitur id in sapien.',
        image: 'https://via.placeholder.com/150',
    },
    {
        id: 8,
        name: 'Item 8',
        description: 'Description for Item 8. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac lectus vitae odio feugiat fringilla id a sapien. Integer lacinia sem vel nibh hendrerit, vel mattis arcu finibus. Aenean vel tristique eros, nec bibendum odio. Sed nec arcu vel arcu hendrerit efficitur id in sapien.',
        image: 'https://via.placeholder.com/150',
    },
    {
        id: 9,
        name: 'Item 9',
        description: 'Description for Item 9. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac lectus vitae odio feugiat fringilla id a sapien. Integer lacinia sem vel nibh hendrerit, vel mattis arcu finibus. Aenean vel tristique eros, nec bibendum odio. Sed nec arcu vel arcu hendrerit efficitur id in sapien.',
        image: 'https://via.placeholder.com/150',
    },
    {
        id: 10,
        name: 'Item 10',
        description: 'Description for Item 10. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac lectus vitae odio feugiat fringilla id a sapien. Integer lacinia sem vel nibh hendrerit, vel mattis arcu finibus. Aenean vel tristique eros, nec bibendum odio. Sed nec arcu vel arcu hendrerit efficitur id in sapien.',
        image: 'https://via.placeholder.com/150',
    },
    {
        id: 11,
        name: 'Item 11',
        description: 'Description for Item 11. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac lectus vitae odio feugiat fringilla id a sapien. Integer lacinia sem vel nibh hendrerit, vel mattis arcu finibus. Aenean vel tristique eros, nec bibendum odio. Sed nec arcu vel arcu hendrerit efficitur id in sapien.',
        image: 'https://via.placeholder.com/150',
    },
    {
        id: 12,
        name: 'Item 12',
        description: 'Description for Item 12. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac lectus vitae odio feugiat fringilla id a sapien. Integer lacinia sem vel nibh hendrerit, vel mattis arcu finibus. Aenean vel tristique eros, nec bibendum odio. Sed nec arcu vel arcu hendrerit efficitur id in sapien.',
        image: 'https://via.placeholder.com/150',
    },
    {
        id: 13,
        name: 'Item 13',
        description: 'Description for Item 13. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac lectus vitae odio feugiat fringilla id a sapien. Integer lacinia sem vel nibh hendrerit, vel mattis arcu finibus. Aenean vel tristique eros, nec bibendum odio. Sed nec arcu vel arcu hendrerit efficitur id in sapien.',
        image: 'https://via.placeholder.com/150',
    },
    {
        id: 14,
        name: 'Item 14',
        description: 'Description for Item 14. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac lectus vitae odio feugiat fringilla id a sapien. Integer lacinia sem vel nibh hendrerit, vel mattis arcu finibus. Aenean vel tristique eros, nec bibendum odio. Sed nec arcu vel arcu hendrerit efficitur id in sapien.',
        image: 'https://via.placeholder.com/150',
    },
    {
        id: 15,
        name: 'Item 15',
        description: 'Description for Item 15. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac lectus vitae odio feugiat fringilla id a sapien. Integer lacinia sem vel nibh hendrerit, vel mattis arcu finibus. Aenean vel tristique eros, nec bibendum odio. Sed nec arcu vel arcu hendrerit efficitur id in sapien.',
        image: 'https://via.placeholder.com/150',
    },
    {
        id: 16,
        name: 'Item 16',
        description: 'Description for Item 16. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac lectus vitae odio feugiat fringilla id a sapien. Integer lacinia sem vel nibh hendrerit, vel mattis arcu finibus. Aenean vel tristique eros, nec bibendum odio. Sed nec arcu vel arcu hendrerit efficitur id in sapien.',
        image: 'https://via.placeholder.com/150',
    },
    {
        id: 17,
        name: 'Item 17',
        description: 'Description for Item 17. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac lectus vitae odio feugiat fringilla id a sapien. Integer lacinia sem vel nibh hendrerit, vel mattis arcu finibus. Aenean vel tristique eros, nec bibendum odio. Sed nec arcu vel arcu hendrerit efficitur id in sapien.',
        image: 'https://via.placeholder.com/150',
    },
    {
        id: 18,
        name: 'Item 18',
        description: 'Description for Item 18. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac lectus vitae odio feugiat fringilla id a sapien. Integer lacinia sem vel nibh hendrerit, vel mattis arcu finibus. Aenean vel tristique eros, nec bibendum odio. Sed nec arcu vel arcu hendrerit efficitur id in sapien.',
        image: 'https://via.placeholder.com/150',
    },
    {
        id: 19,
        name: 'Item 19',
        description: 'Description for Item 19. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac lectus vitae odio feugiat fringilla id a sapien. Integer lacinia sem vel nibh hendrerit, vel mattis arcu finibus. Aenean vel tristique eros, nec bibendum odio. Sed nec arcu vel arcu hendrerit efficitur id in sapien.',
        image: 'https://via.placeholder.com/150',
    },
    {
        id: 20,
        name: 'Item 20',
        description: 'Description for Item 20. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac lectus vitae odio feugiat fringilla id a sapien. Integer lacinia sem vel nibh hendrerit, vel mattis arcu finibus. Aenean vel tristique eros, nec bibendum odio. Sed nec arcu vel arcu hendrerit efficitur id in sapien.',
        image: 'https://via.placeholder.com/150',
    },
    {
        id: 21,
        name: 'Item 21',
        description: 'Description for Item 21. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac lectus vitae odio feugiat fringilla id a sapien. Integer lacinia sem vel nibh hendrerit, vel mattis arcu finibus. Aenean vel tristique eros, nec bibendum odio. Sed nec arcu vel arcu hendrerit efficitur id in sapien.',
        image: 'https://via.placeholder.com/150',
    },
    {
        id: 22,
        name: 'Item 22',
        description: 'Description for Item 22. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac lectus vitae odio feugiat fringilla id a sapien. Integer lacinia sem vel nibh hendrerit, vel mattis arcu finibus. Aenean vel tristique eros, nec bibendum odio. Sed nec arcu vel arcu hendrerit efficitur id in sapien.',
        image: 'https://via.placeholder.com/150',
    },
    {
        id: 23,
        name: 'Item 23',
        description: 'Description for Item 23. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac lectus vitae odio feugiat fringilla id a sapien. Integer lacinia sem vel nibh hendrerit, vel mattis arcu finibus. Aenean vel tristique eros, nec bibendum odio. Sed nec arcu vel arcu hendrerit efficitur id in sapien.',
        image: 'https://via.placeholder.com/150',
    },
    {
        id: 24,
        name: 'Item 24',
        description: 'Description for Item 24. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac lectus vitae odio feugiat fringilla id a sapien. Integer lacinia sem vel nibh hendrerit, vel mattis arcu finibus. Aenean vel tristique eros, nec bibendum odio. Sed nec arcu vel arcu hendrerit efficitur id in sapien.',
        image: 'https://via.placeholder.com/150',
    },
    {
        id: 25,
        name: 'Item 25',
        description: 'Description for Item 25. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac lectus vitae odio feugiat fringilla id a sapien. Integer lacinia sem vel nibh hendrerit, vel mattis arcu finibus. Aenean vel tristique eros, nec bibendum odio. Sed nec arcu vel arcu hendrerit efficitur id in sapien.',
        image: 'https://via.placeholder.com/150',
    },
    {
        id: 26,
        name: 'Item 26',
        description: 'Description for Item 26. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac lectus vitae odio feugiat fringilla id a sapien. Integer lacinia sem vel nibh hendrerit, vel mattis arcu finibus. Aenean vel tristique eros, nec bibendum odio. Sed nec arcu vel arcu hendrerit efficitur id in sapien.',
        image: 'https://via.placeholder.com/150',
    },
    {
        id: 27,
        name: 'Item 27',
        description: 'Description for Item 27. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac lectus vitae odio feugiat fringilla id a sapien. Integer lacinia sem vel nibh hendrerit, vel mattis arcu finibus. Aenean vel tristique eros, nec bibendum odio. Sed nec arcu vel arcu hendrerit efficitur id in sapien.',
        image: 'https://via.placeholder.com/150',
    },
    {
        id: 28,
        name: 'Item 28',
        description: 'Description for Item 28. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac lectus vitae odio feugiat fringilla id a sapien. Integer lacinia sem vel nibh hendrerit, vel mattis arcu finibus. Aenean vel tristique eros, nec bibendum odio. Sed nec arcu vel arcu hendrerit efficitur id in sapien.',
        image: 'https://via.placeholder.com/150',
    },
    {
        id: 29,
        name: 'Item 29',
        description: 'Description for Item 29. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac lectus vitae odio feugiat fringilla id a sapien. Integer lacinia sem vel nibh hendrerit, vel mattis arcu finibus. Aenean vel tristique eros, nec bibendum odio. Sed nec arcu vel arcu hendrerit efficitur id in sapien.',
        image: 'https://via.placeholder.com/150',
    },
    {
        id: 30,
        name: 'Item 30',
        description: 'Description for Item 30. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac lectus vitae odio feugiat fringilla id a sapien. Integer lacinia sem vel nibh hendrerit, vel mattis arcu finibus. Aenean vel tristique eros, nec bibendum odio. Sed nec arcu vel arcu hendrerit efficitur id in sapien.',
        image: 'https://via.placeholder.com/150',
    },
    {
        id: 31,
        name: 'Item 31',
        description: 'Description for Item 31. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac lectus vitae odio feugiat fringilla id a sapien. Integer lacinia sem vel nibh hendrerit, vel mattis arcu finibus. Aenean vel tristique eros, nec bibendum odio. Sed nec arcu vel arcu hendrerit efficitur id in sapien.',
        image: 'https://via.placeholder.com/150',
    },
    {
        id: 32,
        name: 'Item 32',
        description: 'Description for Item 32. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac lectus vitae odio feugiat fringilla id a sapien. Integer lacinia sem vel nibh hendrerit, vel mattis arcu finibus. Aenean vel tristique eros, nec bibendum odio. Sed nec arcu vel arcu hendrerit efficitur id in sapien.',
        image: 'https://via.placeholder.com/150',
    },
    {
        id: 33,
        name: 'Item 33',
        description: 'Description for Item 33. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac lectus vitae odio feugiat fringilla id a sapien. Integer lacinia sem vel nibh hendrerit, vel mattis arcu finibus. Aenean vel tristique eros, nec bibendum odio. Sed nec arcu vel arcu hendrerit efficitur id in sapien.',
        image: 'https://via.placeholder.com/150',
    },
    {
        id: 34,
        name: 'Item 34',
        description: 'Description for Item 34. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac lectus vitae odio feugiat fringilla id a sapien. Integer lacinia sem vel nibh hendrerit, vel mattis arcu finibus. Aenean vel tristique eros, nec bibendum odio. Sed nec arcu vel arcu hendrerit efficitur id in sapien.',
        image: 'https://via.placeholder.com/150',
    },
    {
        id: 35,
        name: 'Item 35',
        description: 'Description for Item 35. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac lectus vitae odio feugiat fringilla id a sapien. Integer lacinia sem vel nibh hendrerit, vel mattis arcu finibus. Aenean vel tristique eros, nec bibendum odio. Sed nec arcu vel arcu hendrerit efficitur id in sapien.',
        image: 'https://via.placeholder.com/150',
    },
    {
        id: 36,
        name: 'Item 36',
        description: 'Description for Item 36. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac lectus vitae odio feugiat fringilla id a sapien. Integer lacinia sem vel nibh hendrerit, vel mattis arcu finibus. Aenean vel tristique eros, nec bibendum odio. Sed nec arcu vel arcu hendrerit efficitur id in sapien.',
        image: 'https://via.placeholder.com/150',
    },
    {
        id: 37,
        name: 'Item 37',
        description: 'Description for Item 37. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac lectus vitae odio feugiat fringilla id a sapien. Integer lacinia sem vel nibh hendrerit, vel mattis arcu finibus. Aenean vel tristique eros, nec bibendum odio. Sed nec arcu vel arcu hendrerit efficitur id in sapien.',
        image: 'https://via.placeholder.com/150',
    },
    {
        id: 38,
        name: 'Item 38',
        description: 'Description for Item 38. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac lectus vitae odio feugiat fringilla id a sapien. Integer lacinia sem vel nibh hendrerit, vel mattis arcu finibus. Aenean vel tristique eros, nec bibendum odio. Sed nec arcu vel arcu hendrerit efficitur id in sapien.',
        image: 'https://via.placeholder.com/150',
    },
    {
        id: 39,
        name: 'Item 39',
        description: 'Description for Item 39. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac lectus vitae odio feugiat fringilla id a sapien. Integer lacinia sem vel nibh hendrerit, vel mattis arcu finibus. Aenean vel tristique eros, nec bibendum odio. Sed nec arcu vel arcu hendrerit efficitur id in sapien.',
        image: 'https://via.placeholder.com/150',
    },
    {
        id: 40,
        name: 'Item 40',
        description: 'Description for Item 40. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac lectus vitae odio feugiat fringilla id a sapien. Integer lacinia sem vel nibh hendrerit, vel mattis arcu finibus. Aenean vel tristique eros, nec bibendum odio. Sed nec arcu vel arcu hendrerit efficitur id in sapien.',
        image: 'https://via.placeholder.com/150',
    },
    {
        id: 41,
        name: 'Item 41',
        description: 'Description for Item 41. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac lectus vitae odio feugiat fringilla id a sapien. Integer lacinia sem vel nibh hendrerit, vel mattis arcu finibus. Aenean vel tristique eros, nec bibendum odio. Sed nec arcu vel arcu hendrerit efficitur id in sapien.',
        image: 'https://via.placeholder.com/150',
    },
    {
        id: 42,
        name: 'Item 42',
        description: 'Description for Item 42. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac lectus vitae odio feugiat fringilla id a sapien. Integer lacinia sem vel nibh hendrerit, vel mattis arcu finibus. Aenean vel tristique eros, nec bibendum odio. Sed nec arcu vel arcu hendrerit efficitur id in sapien.',
        image: 'https://via.placeholder.com/150',
    },
    {
        id: 43,
        name: 'Item 43',
        description: 'Description for Item 43. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac lectus vitae odio feugiat fringilla id a sapien. Integer lacinia sem vel nibh hendrerit, vel mattis arcu finibus. Aenean vel tristique eros, nec bibendum odio. Sed nec arcu vel arcu hendrerit efficitur id in sapien.',
        image: 'https://via.placeholder.com/150',
    },
    {
        id: 44,
        name: 'Item 44',
        description: 'Description for Item 44. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac lectus vitae odio feugiat fringilla id a sapien. Integer lacinia sem vel nibh hendrerit, vel mattis arcu finibus. Aenean vel tristique eros, nec bibendum odio. Sed nec arcu vel arcu hendrerit efficitur id in sapien.',
        image: 'https://via.placeholder.com/150',
    },
    {
        id: 45,
        name: 'Item 45',
        description: 'Description for Item 45. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac lectus vitae odio feugiat fringilla id a sapien. Integer lacinia sem vel nibh hendrerit, vel mattis arcu finibus. Aenean vel tristique eros, nec bibendum odio. Sed nec arcu vel arcu hendrerit efficitur id in sapien.',
        image: 'https://via.placeholder.com/150',
    },
    {
        id: 46,
        name: 'Item 46',
        description: 'Description for Item 46. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac lectus vitae odio feugiat fringilla id a sapien. Integer lacinia sem vel nibh hendrerit, vel mattis arcu finibus. Aenean vel tristique eros, nec bibendum odio. Sed nec arcu vel arcu hendrerit efficitur id in sapien.',
        image: 'https://via.placeholder.com/150',
    },
]

export const fetchItems = (page, limit) => {
    const startIndex = (page - 1) * limit
    const endIndex = startIndex + limit
    const nextPage = mockApiData.length > endIndex ? true : false

    const items = mockApiData.slice(startIndex, endIndex)
    const res = {
        items: items,
        nextPage: nextPage
    }

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(res)
        }, 1000)
    })
}
