import "reflect-metadata";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app/app.module";
import { getAsciiArt } from "./shared/utils/asciiArt";
import { Logger } from "@nestjs/common";
import { LogInterceptor } from "./shared/interceptors/log.interceptor";

declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { bufferLogs: true });
  const logger = new Logger();
  const port = process.env.APP_PORT || 80;

  app.useGlobalInterceptors(new LogInterceptor());

  app.useLogger(logger);

  await app.listen(port, (): void => {
    logger.log(`listening on port: ${port}`);
    logger.log(getAsciiArt());
  });

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}

bootstrap();
