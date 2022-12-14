import {BelongsTo, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {User} from "../users/users.model";

interface PostCreatingAttrs {
    title: string;
    content: string;
    image: string;
    userId: number;
}

@Table({tableName: 'posts'})
export class Post extends Model<Post, PostCreatingAttrs> {

    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.STRING, unique: true, allowNull: true})
    title: string;

    @Column({type: DataType.STRING, allowNull: true})
    content: string;

    @Column({type: DataType.STRING})
    image: string;

    @ForeignKey(() => User)
    @Column({type: DataType.INTEGER})
    userId: number;

    @BelongsTo(() => User)
    author: User;
}