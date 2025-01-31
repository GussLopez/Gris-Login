import { Table, Column, Model, DataType, HasMany, BelongsTo, ForeignKey, Default } from 'sequelize-typescript'

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

    @Default('user')
    @Column({
        type: DataType.STRING(10)
    })
    declare role: string

    @Column({
        type: DataType.STRING(6)
    })
   declare token: string

   @Default(false)
    @Column({
        type: DataType.BOOLEAN
    })
    declare confirmed: Boolean

    @Column({
        type: DataType.STRING(100)
    })
    declare secret: String
}

export default User
