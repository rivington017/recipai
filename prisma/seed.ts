const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  // ユーザー作成
  const user = await prisma.user.upsert({
    where: { email: "test@example.com" },
    update: {},
    create: {
      email: "test@example.com",
      password: "password",
    },
  });

  // 食材作成
  const [egg, milk, tomato] = await Promise.all([
    prisma.ingredient.upsert({
      where: { name: "たまご" },
      update: {},
      create: { name: "たまご" },
    }),
    prisma.ingredient.upsert({
      where: { name: "牛乳" },
      update: {},
      create: { name: "牛乳" },
    }),
    prisma.ingredient.upsert({
      where: { name: "トマト" },
      update: {},
      create: { name: "トマト" },
    }),
  ]);

  // レシピ作成
  const recipe = await prisma.recipe.create({
    data: {
      title: "レシピタイトル 2",
      description: "おいしいサンプルレシピです",
      estimatedTime: "20",
      userId: user.id,
      instructions: "材料を混ぜる\n焼く\n盛り付ける",
      imageUrl: "",
      authorName: "他ユーザーA",
    },
  });
  // isFavorite, isPublicはupdateでセット
  await prisma.recipe.update({
    where: { id: recipe.id },
    data: { isFavorite: true, isPublic: true },
  });

  // UserIngredient
  await prisma.userIngredient.createMany({
    data: [
      {
        userId: user.id,
        ingredientId: egg.id,
        quantity: "2個",
        memo: "朝食用",
      },
      { userId: user.id, ingredientId: milk.id, quantity: "200ml", memo: "" },
      { userId: user.id, ingredientId: tomato.id, quantity: "1個", memo: "" },
    ],
    skipDuplicates: true,
  });

  // RecipeIngredient
  await prisma.recipeIngredient.createMany({
    data: [
      {
        recipeId: recipe.id,
        ingredientId: egg.id,
        quantity: "2個",
        isUserInput: false,
      },
      {
        recipeId: recipe.id,
        ingredientId: milk.id,
        quantity: "200ml",
        isUserInput: false,
      },
      {
        recipeId: recipe.id,
        ingredientId: tomato.id,
        quantity: "1個",
        isUserInput: false,
      },
    ],
    skipDuplicates: true,
  });

  // ShoppingSuggestion
  await prisma.shoppingSuggestion.create({
    data: {
      userId: user.id,
      ingredientId: tomato.id,
      reason: "在庫切れ",
      isCompleted: false,
    },
  });

  // RecipeFeedback
  await prisma.recipeFeedback.create({
    data: {
      userId: user.id,
      recipeId: recipe.id,
      rating: 5,
      comment: "とても美味しかった！",
    },
  });

  // IngredientTag & IngredientTagOnIngredient
  const dairyTag = await prisma.ingredientTag.upsert({
    where: { name: "乳製品" },
    update: {},
    create: { name: "乳製品" },
  });
  await prisma.ingredientTagOnIngredient.create({
    data: {
      ingredientId: milk.id,
      tagId: dairyTag.id,
    },
  });

  // RecipeTag & RecipeTagOnRecipe
  const quickTag = await prisma.recipeTag.upsert({
    where: { name: "時短" },
    update: {},
    create: { name: "時短" },
  });
  await prisma.recipeTagOnRecipe.create({
    data: {
      recipeId: recipe.id,
      tagId: quickTag.id,
    },
  });

  // UserEvent
  await prisma.userEvent.create({
    data: {
      userId: user.id,
      type: "view_recipe",
      detail: `レシピID: ${recipe.id}`,
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
