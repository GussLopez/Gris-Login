import { Table, Column, Model, DataType, HasMany, BelongsTo, ForeignKey } from 'sequelize-typescript'

@Table({
    tableName: 'users'
})

class User extends Model {
    @Column({
        type: DataType.STRING(100)
    })
    declare name: string

    @Column({
        type: DataType.STRING(20)
    })
    declare phone: string

    @Column({
        type: DataType.STRING(100)
    })
    declare email: string

    @Column({
        type: DataType.STRING(150)
    })
    declare password: string

    @Column({
        type: DataType.STRING
    })
   declare token: string

    @Column({
        type: DataType.STRING
    })
    declare confirmed: string
}

export default User
