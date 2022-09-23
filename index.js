
class Board{
	constructor(size){
		this.size = size
		this.B = {}
	}
	get(x, y){
		if(x<this.size && y<this.size){
			let value = this.B[`${x}:${y}`]
			if(!value){
				value = 0
			}
			return value
		}
		return -1
	}
	set(x, y, v){
		this.B[`${x}:${y}`] = v
	}
	newBlock(){
		const av = []
		for(let i=0; i<this.size; i++){
			for(let j=0; j<this.size; j++){
				if(!this.get(i, j)){
					av.push([i, j])
				}
			}
		}
		
		const len = av.length

		if(len > 0){
			const rand = Math.floor(Math.random()*len)

			const cell = av[rand]
			const val = ((Math.random()>=0.9)+1)*2

			this.set(cell[0], cell[1], val)
		}
	}
	move(dir){

		if(dir == 'left'){
			for(let i=0; i<this.size; i++){
				const row = []

				for(let j=0; j<this.size; j++){
					if(this.get(i, j)==this.get(i, j+1) && this.get(i, j) != 0){
						row.push(this.get(i, j)*2)
						j++
					}else if(this.get(i, j)!=0){
						row.push(this.get(i, j))
					}
				}

				for(let j=0; j<this.size; j++){
					if(j<row.length){
						this.set(i, j, row[j])
					}else{
						this.set(i, j, 0)
					}
				}
			}
		}else if(dir == 'right'){
			for(let i=0; i<this.size; i++){
				const row = []

				for(let j=this.size-1; j>=0; j--){
					if(this.get(i, j)==this.get(i, j-1) && this.get(i, j) != 0){
						row.push(this.get(i, j)*2)
						j--
					}else if(this.get(i, j)!=0){
						row.push(this.get(i, j))
					}
				}

				for(let j=0; j<this.size; j++){
					if(j<row.length){
						this.set(i, this.size-j-1, row[j])
					}else{
						this.set(i, this.size-j-1, 0)
					}
				}
			}
		}else if(dir == 'up'){
			for(let j=0; j<this.size; j++){
				const row = []

				for(let i=0; i<this.size; i++){
					if(this.get(i, j)==this.get(i+1, j) && this.get(i, j) != 0){
						row.push(this.get(i, j)*2)
						i++
					}else if(this.get(i, j)!=0){
						row.push(this.get(i, j))
					}
				}

				for(let i=0; i<this.size; i++){
					if(i<row.length){
						this.set(i, j, row[i])
					}else{
						this.set(i, j, 0)
					}
				}
			}
		}else if(dir == 'down'){
			for(let j=0; j<this.size; j++){
				const row = []

				for(let i=this.size-1; i>=0; i--){
					if(this.get(i, j)==this.get(i-1, j) && this.get(i, j) != 0){
						row.push(this.get(i, j)*2)
						i--
					}else if(this.get(i, j)!=0){
						row.push(this.get(i, j))
					}
				}

				for(let i=0; i<this.size; i++){
					if(i<row.length){
						this.set(this.size-i-1, j, row[i])
					}else{
						this.set(this.size-i-1, j, 0)
					}
				}
			}
		}

	}
	draw(){
		for(let i=0; i<this.size; i++){
			const a = []
			for(let j=0; j<this.size; j++){
				a.push(this.get(i, j))
			}
			console.log(a)
		}
	}
}

class Game{
	constructor(size){

		this.size = size
		this.board = new Board(size)

		this.board.newBlock()
		this.board.newBlock()

		this.board.draw()

	console.log('	')
		this.board.move('down')

		this.board.draw()
		

	}
}


let g = new Game(3)