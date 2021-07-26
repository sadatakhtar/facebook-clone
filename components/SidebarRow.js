import Image from 'next/image'

function SidebarRow({src, Icon, title}) {
  return (
    <div className='flex p-4 cursor-pointer rounded-xl space-x-2 hover:bg-gray-200'>
      {src && (
        <Image 
          className='rounded-full'
          src={src}
          width={30}
          height={30}
          layout='fixed'
          alt='image'
        />
        
      )}
      {Icon && (
          <Icon className='h-8 w-8 text-blue-500'/>
        )}
        <p className='hidden sm:inline-flex font-medium'>{title}</p>


      
    </div>
  )
}

export default SidebarRow

