import Image from 'next/image'

export default function ProyectInfo({ duration, typeOfWork, role }) {
	return (
		<>
			<div className="h-14 flex gap-2 items-center justify-between w-full rounded-2xl">
				<div className="flex flex-row items-center gap-2  text-left ">
					<Image
						src="/prtfolio/icons/ProyectoReloj.svg"
						width={25}
						height={25}
						alt="Tiempo de proyecto"
					/>
					<span className="text-xs md:text-lg text-center">
						{duration}
					</span>
				</div>
				<div className="flex flex-row items-center gap-2  text-left ">
					<Image
						src="/prtfolio/icons/ProyectoMaletin.svg"
						width={25}
						height={25}
						alt="Rol desempeñado"
					/>
					<span className="text-xs md:text-lg text-center">
						{role}
					</span>
				</div>
				<div className="flex flex-row items-center gap-2  text-left ">
					<Image
						src="/prtfolio/icons/ProyectoPersonas.svg"
						width={25}
						height={25}
						alt="Modalidad de trabajo"
					/>
					<span className="text-xs md:text-lg text-center">
						{typeOfWork}
					</span>
				</div>
			</div>
		</>
	)
}
