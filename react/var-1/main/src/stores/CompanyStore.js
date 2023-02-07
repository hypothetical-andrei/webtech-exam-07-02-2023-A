import {EventEmitter} from 'fbemitter'

class CompanyStore{
	constructor(){
		this.companies = [{
			id : 1,
			name : 'acme inc',
			employees : 100,
			revenue : 1000
		},{
			id : 2,
			name : 'apex llc',
			employees : 20,
			revenue : 100
		}]
		this.emitter = new EventEmitter()
	}
	addOne(company){
		this.companies.push(company)
		this.emitter.emit('UPDATE')
	}
	getAll(){
		return this.companies
	}
	deleteOne(id){
		let index = this.companies.findIndex((e) => e.id === id)
		if (index !== -1){
			this.companies.splice(index, 1)
		}
		this.emitter.emit('UPDATE')
	}
	saveOne(id, company){
		let index = this.companies.findIndex((e) => e.id === id)
		if (index !== -1){
			Object.assign(this.companies[index], company) 
		}
		this.emitter.emit('UPDATE')
	}

}

export default CompanyStore